import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "@/components/hero";

describe("Hero Component", () => {
  const mockHandlers = {
    onTryCalculator: jest.fn(),
    onLearnMore: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render hero component", () => {
    render(
      <Hero
        userCount={0}
        onTryCalculator={mockHandlers.onTryCalculator}
        onLearnMore={mockHandlers.onLearnMore}
      />,
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should display user count", () => {
    render(
      <Hero
        userCount={42}
        onTryCalculator={mockHandlers.onTryCalculator}
        onLearnMore={mockHandlers.onLearnMore}
      />,
    );

    expect(screen.getByText(/42/)).toBeInTheDocument();
  });

  it("should render hero section with proper structure", () => {
    const { container } = render(
      <Hero
        userCount={0}
        onTryCalculator={mockHandlers.onTryCalculator}
        onLearnMore={mockHandlers.onLearnMore}
      />,
    );

    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should have responsive design classes", () => {
    const { container } = render(
      <Hero
        userCount={0}
        onTryCalculator={mockHandlers.onTryCalculator}
        onLearnMore={mockHandlers.onLearnMore}
      />,
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("relative", "w-full", "overflow-hidden");
  });
});
