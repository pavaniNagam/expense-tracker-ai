"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  yearsToRetirement: string;
  basicPay: string;
  dearness: string;
  employeeContribution: string;
  employerContribution: string;
  yearlyIncrement: string;
  currentNpsValue: string;
  expectedEquityReturns: string;
  expectedCropBondReturns: string;
  expectedGovtBondReturns: string;
  standardChoice: string;
  lifeCycleL50: string;
  lifeCycleL75: string;
  lifeCycleAggressive: string;
  activeChoice: string;
  sector: string;
  scheme: string;
  dob: string;
}

export function NPSCalculator() {
  const [formData, setFormData] = React.useState<FormData>({
    yearsToRetirement: "",
    basicPay: "",
    dearness: "",
    employeeContribution: "",
    employerContribution: "",
    yearlyIncrement: "",
    currentNpsValue: "",
    expectedEquityReturns: "",
    expectedCropBondReturns: "",
    expectedGovtBondReturns: "",
    standardChoice: "",
    lifeCycleL50: "",
    lifeCycleL75: "",
    lifeCycleAggressive: "",
    activeChoice: "",
    sector: "government",
    scheme: "central",
    dob: "",
  });

  const [calculatedAge, setCalculatedAge] = React.useState<number | null>(null);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = React.useState(false);

  // Calculate age from date of birth
  const calculateAgeFromDOB = (dobString: string): number | null => {
    if (!dobString) return null;

    const dob = new Date(dobString);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Skip age validation - it's already validated on DOB selection
    // Only check if DOB is provided
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    // Years to Retirement validation
    if (!formData.yearsToRetirement) {
      newErrors.yearsToRetirement = "Years to retirement is required";
    } else if (parseInt(formData.yearsToRetirement) < 1) {
      newErrors.yearsToRetirement = "Years must be at least 1";
    }

    // Numeric field validations
    if (formData.basicPay && parseInt(formData.basicPay) < 0) {
      newErrors.basicPay = "Basic pay cannot be negative";
    }
    if (formData.dearness && parseInt(formData.dearness) < 0) {
      newErrors.dearness = "DA cannot be negative";
    }
    if (
      formData.employeeContribution &&
      parseInt(formData.employeeContribution) < 0
    ) {
      newErrors.employeeContribution = "Contribution cannot be negative";
    }
    if (
      formData.employerContribution &&
      parseInt(formData.employerContribution) < 0
    ) {
      newErrors.employerContribution = "Contribution cannot be negative";
    }
    if (formData.currentNpsValue && parseInt(formData.currentNpsValue) < 0) {
      newErrors.currentNpsValue = "NPS value cannot be negative";
    }

    // Percentage validations
    if (
      formData.yearlyIncrement &&
      (parseInt(formData.yearlyIncrement) < 0 ||
        parseInt(formData.yearlyIncrement) > 100)
    ) {
      newErrors.yearlyIncrement = "Increment must be between 0-100%";
    }
    if (
      formData.expectedEquityReturns &&
      (parseInt(formData.expectedEquityReturns) < 0 ||
        parseInt(formData.expectedEquityReturns) > 100)
    ) {
      newErrors.expectedEquityReturns = "Returns must be between 0-100%";
    }
    if (
      formData.expectedCropBondReturns &&
      (parseInt(formData.expectedCropBondReturns) < 0 ||
        parseInt(formData.expectedCropBondReturns) > 100)
    ) {
      newErrors.expectedCropBondReturns = "Returns must be between 0-100%";
    }
    if (
      formData.expectedGovtBondReturns &&
      (parseInt(formData.expectedGovtBondReturns) < 0 ||
        parseInt(formData.expectedGovtBondReturns) > 100)
    ) {
      newErrors.expectedGovtBondReturns = "Returns must be between 0-100%";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Special handling for date of birth
    if (name === "dob") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Calculate age and validate
      if (value) {
        const age = calculateAgeFromDOB(value);
        setCalculatedAge(age);

        // Clear error if age is valid
        if (age !== null && age > 18) {
          const newErrors = { ...errors };
          delete newErrors.dob;
          setErrors(newErrors);
        }
      } else {
        setCalculatedAge(null);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error on field change
      if (touched[name]) {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      }
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log("Form submitted successfully:", formData);
      // Reset submitted state after 2 seconds
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      yearsToRetirement: "",
      basicPay: "",
      dearness: "",
      employeeContribution: "",
      employerContribution: "",
      yearlyIncrement: "",
      currentNpsValue: "",
      expectedEquityReturns: "",
      expectedCropBondReturns: "",
      expectedGovtBondReturns: "",
      standardChoice: "",
      lifeCycleL50: "",
      lifeCycleL75: "",
      lifeCycleAggressive: "",
      activeChoice: "",
      sector: "government",
      scheme: "central",
      dob: "",
    });
    setCalculatedAge(null);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const renderInput = (
    label: string,
    name: string,
    type: string = "text",
    placeholder: string = "",
    required: boolean = false,
  ) => {
    const hasError = errors[name];
    const isTouched = touched[name];

    return (
      <div className="space-y-2">
        <Label htmlFor={name} className="text-sm font-semibold">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={formData[name as keyof FormData]}
          onChange={handleInputChange}
          onBlur={() => handleBlur(name)}
          className={hasError && isTouched ? "border-red-500" : ""}
        />
        {hasError && isTouched && (
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle className="w-4 h-4" />
            {hasError}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full space-y-6">
      {/* Success Message */}
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-2">
          <span>✓</span>
          <span>NPS Calculator data submitted successfully!</span>
        </div>
      )}

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold">
            <span
              style={{
                background:
                  "linear-gradient(to right, #0ea5e9, #3b82f6, #1e40af)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NPS Returns Calculator
            </span>
          </CardTitle>
          <CardDescription>
            Plan your retirement by filling in your financial details and
            investment preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4 pb-6 border-b">
              <h3 className="text-lg font-semibold text-blue-700">
                Personal Information
              </h3>

              {/* Date of Birth with Age Display */}
              <div className="space-y-2">
                <Label htmlFor="dob" className="text-sm font-semibold">
                  Date of Birth <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="flex gap-3 items-start">
                  <div className="flex-1">
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("dob")}
                    />
                  </div>
                  {calculatedAge !== null && (
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-md font-semibold whitespace-nowrap border-2 ${
                        calculatedAge <= 18
                          ? "bg-red-50 border-red-300 text-red-700"
                          : "bg-green-50 border-green-300 text-green-700"
                      }`}
                    >
                      <span className="text-lg">
                        {calculatedAge <= 18 ? "✕" : "✓"}
                      </span>
                      <span>Age: {calculatedAge}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold">
                  Subscriber Sector *
                </Label>
                <RadioGroup
                  value={formData.sector}
                  onValueChange={(value) => handleSelectChange("sector", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="government" id="gov" />
                    <Label htmlFor="gov" className="font-normal cursor-pointer">
                      Government
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non-government" id="non-gov" />
                    <Label
                      htmlFor="non-gov"
                      className="font-normal cursor-pointer"
                    >
                      Non-Government
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nps-lite" id="nps-lite" />
                    <Label
                      htmlFor="nps-lite"
                      className="font-normal cursor-pointer"
                    >
                      NPS Lite
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scheme" className="text-sm font-semibold">
                  Scheme Available *
                </Label>
                <Select
                  value={formData.scheme}
                  onValueChange={(value) => handleSelectChange("scheme", value)}
                >
                  <SelectTrigger id="scheme">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">Central Government</SelectItem>
                    <SelectItem value="state">State Government</SelectItem>
                    <SelectItem value="private">Private Sector</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Financial Information Section */}
            <div className="space-y-4 pb-6 border-b">
              <h3 className="text-lg font-semibold text-blue-700">
                Financial Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput("Basic Pay", "basicPay", "number", "₹ 0", false)}
                {renderInput(
                  "Dearness Allowances (DA)",
                  "dearness",
                  "number",
                  "₹ 0",
                  false,
                )}
                {renderInput(
                  "Employee Contribution",
                  "employeeContribution",
                  "number",
                  "₹ 0",
                  false,
                )}
                {renderInput(
                  "Employer Contribution",
                  "employerContribution",
                  "number",
                  "₹ 0",
                  false,
                )}
                {renderInput(
                  "My Existing NPS Tier 1 Corpus",
                  "currentNpsValue",
                  "number",
                  "₹ 0",
                  false,
                )}
              </div>
            </div>

            {/* Retirement Planning Section */}
            <div className="space-y-4 pb-6 border-b">
              <h3 className="text-lg font-semibold text-blue-700">
                Retirement Planning
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput(
                  "Years to Retirement",
                  "yearsToRetirement",
                  "number",
                  "Enter years",
                  true,
                )}
                {renderInput(
                  "Yearly Increment",
                  "yearlyIncrement",
                  "number",
                  "% (0-100)",
                  false,
                )}
              </div>
            </div>

            {/* Investment Returns Section */}
            <div className="space-y-4 pb-6 border-b">
              <h3 className="text-lg font-semibold text-blue-700">
                Expected Investment Returns
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput(
                  "Expected Equity Returns",
                  "expectedEquityReturns",
                  "number",
                  "% (0-100)",
                  false,
                )}
                {renderInput(
                  "Expected Corp. Bond Returns",
                  "expectedCropBondReturns",
                  "number",
                  "% (0-100)",
                  false,
                )}
                {renderInput(
                  "Expected Govt. Bond Returns",
                  "expectedGovtBondReturns",
                  "number",
                  "% (0-100)",
                  false,
                )}
              </div>
            </div>

            {/* Investment Options Section */}
            <div className="space-y-4 pb-6 border-b">
              <h3 className="text-lg font-semibold text-blue-700">
                Investment Options
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput(
                  "Standard Choice / Default Option",
                  "standardChoice",
                  "number",
                  "Enter value",
                  false,
                )}
                {renderInput(
                  "Life Cycle - L50",
                  "lifeCycleL50",
                  "number",
                  "Enter value",
                  false,
                )}
                {renderInput(
                  "Life Cycle - L75",
                  "lifeCycleL75",
                  "number",
                  "Enter value",
                  false,
                )}
                {renderInput(
                  "Life Cycle Aggressive",
                  "lifeCycleAggressive",
                  "number",
                  "Enter value",
                  false,
                )}
                {renderInput(
                  "Active Choice: E75 - C20 - G5",
                  "activeChoice",
                  "number",
                  "Enter value",
                  false,
                )}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="flex-1" size="lg">
                Calculate
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                size="lg"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>

            {/* Help Text */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-sm text-blue-900">
              <p className="font-semibold mb-2">💡 Form Guidelines:</p>
              <ul className="space-y-1 ml-4">
                <li>
                  • Age is automatically calculated from your date of birth and
                  must be more than 18 years
                </li>
                <li>• All percentage values should be between 0-100</li>
                <li>• Currency values should be positive numbers</li>
                <li>• Fields marked with * are mandatory</li>
              </ul>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
