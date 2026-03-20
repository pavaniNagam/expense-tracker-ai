import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Calculator } from "@/components/calculator";

describe("Calculator Component", () => {
  it("should render calculator component", () => {
    const { container } = render(<Calculator />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should render with proper section structure", () => {
    const { container } = render(<Calculator />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should have proper layout classes", () => {
    const { container } = render(<Calculator />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("w-full", "py-20");
  });

  it("should render calculator content", () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should have calculator section with id", () => {
    const { container } = render(<Calculator />);
    const section = container.querySelector("section#calculator");
    expect(section).toBeInTheDocument();
  });
});
