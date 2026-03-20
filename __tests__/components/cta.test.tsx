import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CTA } from "@/components/cta";

describe("CTA Component", () => {
  it("should render CTA section", () => {
    const { container } = render(<CTA />);
    expect(container).toBeInTheDocument();
  });

  it("should have proper text content", () => {
    render(<CTA />);
    // CTA should contain some text
    const text = screen.queryAllByText(/./);
    expect(text.length).toBeGreaterThan(0);
  });
});
