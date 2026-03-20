import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "@/components/footer";

describe("Footer Component", () => {
  it("should render footer element", () => {
    render(<Footer />);
    const footer =
      screen.queryByRole("contentinfo") || document.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render footer with proper semantic structure", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should have responsive layout", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("w-full");
  });

  it("should contain footer content", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
