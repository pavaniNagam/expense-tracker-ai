import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FooterBanner } from "@/components/footerBanner";

describe("FooterBanner Component", () => {
  it("should render footer banner", () => {
    const { container } = render(<FooterBanner />);
    expect(container).toBeInTheDocument();
  });

  it("should have proper structure", () => {
    const { container } = render(<FooterBanner />);
    const divElement = container.querySelector("div");
    expect(divElement).toBeInTheDocument();
  });
});
