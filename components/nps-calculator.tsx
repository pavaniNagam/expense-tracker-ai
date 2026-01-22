// "use client";

// import * as React from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Slider } from "@/components/ui/slider";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
// import { Text } from "lucide-react";

// export function NPSCalculator() {
//   const [score, setScore] = React.useState(7);

//   // Determine category and color
//   const getCategory = (val: number) => {
//     if (val <= 6)
//       return {
//         label: "Detractor",
//         color: "bg-destructive text-destructive-foreground",
//       };
//     if (val <= 8)
//       return { label: "Passive", color: "bg-warning bg-yellow-500 text-white" };
//     return { label: "Promoter", color: "bg-green-600 text-white" };
//   };

//   const category = getCategory(score);

//   // Switch color based on value
//   const sliderColor =
//     score > 50
//       ? "bg-emerald-800"
//       : score > 30
//         ? "bg-emerald-500"
//         : "bg-emerald-200";

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       {/* <h1>NPS Return Chart</h1> */}
//       <CardHeader>
//         <CardTitle className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-800 bg-clip-text text-transparent">
//           NPS Calculator
//         </CardTitle>
//         <CardDescription>
//           How likely are you to recommend us to a friend?
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-8">
//         {/* The Slider */}
//         <div className="space-y-4">
//           <CardDescription className="text-muted-foreground text-xl font-medium mb-1">
//             Age
//           </CardDescription>
//           <Slider
//             defaultValue={[25]}
//             className="[&_[data-slot=slider-range]]:bg-emerald-600 mb-2"
//             // className={cn(`[&_[data-slot=slider-range]]:${sliderColor}`)}
//             max={60}
//             min={18}
//             step={1}
//             onValueChange={(value) => setScore(value[0])}
//           />
//           <div className="flex justify-between text-xs text-muted-foreground font-medium">
//             <span>18</span>
//             <span>60</span>
//           </div>
//         </div>

//         {/* Score Display */}
//         <div className="flex flex-col items-center justify-center space-y-2">
//           <span className="text-6xl font-bold tracking-tighter">{score}</span>
//           <Badge className={cn("text-sm font-semibold", category.color)}>
//             {category.label}
//           </Badge>
//         </div>

//         {/* The Slider */}
//         <div className="space-y-4">
//           <Slider
//             defaultValue={[7]}
//             max={10}
//             min={0}
//             step={1}
//             onValueChange={(value) => setScore(value[0])}
//           />
//           <div className="flex justify-between text-xs text-muted-foreground font-medium">
//             <span>0 (Not Likely)</span>
//             <span>10 (Very Likely)</span>
//           </div>
//         </div>

//         {/* Simple Explanation */}
//         <div className="rounded-lg bg-muted p-4 text-sm">
//           <p className="text-muted-foreground">
//             <strong>NPS Logic:</strong> Scores 0-6 are{" "}
//             <strong>Detractors</strong>, 7-8 are <strong>Passives</strong>, and
//             9-10 are <strong>Promoters</strong>.
//           </p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, InfoIcon } from "lucide-react";

export function NPSCalculator() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Pension Calculator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Form Inputs */}
        <div className="space-y-6">
          {/* Subscriber Sector */}
          <Card>
            <CardContent className="pt-6">
              <Label className="text-lg font-semibold mb-4 block">
                Subscriber Sector
              </Label>
              <RadioGroup defaultValue="government" className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="government" id="gov" />
                  <Label htmlFor="gov">Government</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-government" id="non-gov" />
                  <Label htmlFor="non-gov">Non-Government</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vatsalya" id="vatsalya" />
                  <Label htmlFor="vatsalya">NPS Vatsalya</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Scheme Selection */}
          <Card>
            <CardContent className="pt-6">
              <Label className="text-sm font-medium mb-2 block">
                Scheme Available *
              </Label>
              <Select defaultValue="central">
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Select Scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="central">Central Government</SelectItem>
                  <SelectItem value="state">State Government</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Date of Birth */}
          <Card>
            <CardContent className="pt-6 flex items-center justify-between gap-4">
              <Label className="font-medium">My Date of Birth is: *</Label>
              <div className="flex items-center flex-1 max-w-sm gap-2">
                <Input type="date" className="h-12" />
                <div className="bg-purple-700 text-white px-4 py-3 rounded-md min-w-[80px] text-center">
                  18 Yrs
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Existing Corpus */}
          <Card>
            <CardContent className="pt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Label className="font-medium">
                  My Existing NPS Tier 1 Corpus ₹
                </Label>
                <InfoIcon className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex items-center flex-1 max-w-sm gap-2">
                <Input
                  type="number"
                  defaultValue="0"
                  className="h-12 text-right"
                />
                <div className="bg-purple-700 text-white px-4 py-3 rounded-md min-w-[80px] text-center">
                  0
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Actions and Illustration */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <Button className="bg-purple-800 hover:bg-purple-900 px-8 py-6 text-lg">
              Calculate
            </Button>
            <Button
              variant="outline"
              className="border-purple-800 text-purple-800 px-8 py-6 text-lg"
            >
              Reset
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700 px-8 py-6 text-lg">
              Open NPS Account
            </Button>
          </div>

          <div className="rounded-2xl overflow-hidden bg-blue-50 border border-blue-100 p-8 flex flex-col items-center justify-center min-h-[400px]">
            {/* Placeholder for the illustration in your screenshot */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-blue-900">
                Introducing Pension Calculator
              </h2>
              <p className="text-blue-700">
                Conceptualized and developed by NPS Trust
              </p>
              <div className="mt-8 opacity-50">[Illustration Placeholder]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
