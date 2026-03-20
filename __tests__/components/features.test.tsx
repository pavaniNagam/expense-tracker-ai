import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Features } from "@/components/features";

describe("Features Component", () => {
  it("should render features section", () => {
    render(<Features />);
    const section = screen.queryByRole("region", { hidden: true });
    expect(section || document.querySelector("section")).toBeInTheDocument();
  });

  it("should render with proper structure", () => {
    const { container } = render(<Features />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should have responsive layout classes", () => {
    const { container } = render(<Features />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("w-full", "py-20", "md:py-28");
  });

  it("should contain feature content", () => {
    const { container } = render(<Features />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should use proper styling", () => {
    const { container } = render(<Features />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("relative", "border-t");
  });
});
