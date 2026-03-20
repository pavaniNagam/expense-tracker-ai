import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "@/components/ui/label";

describe("Label Component", () => {
  it("should render label element", () => {
    const { container } = render(<Label>Test Label</Label>);
    const label = container.querySelector("label");
    expect(label).toBeInTheDocument();
  });

  it("should render label text", () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should accept htmlFor prop", () => {
    const { container } = render(<Label htmlFor="input-id">Label</Label>);
    const label = container.querySelector("label") as HTMLLabelElement;
    expect(label?.htmlFor).toBe("input-id");
  });

  it("should apply custom className", () => {
    const { container } = render(<Label className="custom-class">Label</Label>);
    const label = container.querySelector("label");
    expect(label?.className).toContain("custom-class");
  });
});
