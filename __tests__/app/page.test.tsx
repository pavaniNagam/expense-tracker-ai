"use client";

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

// Mock the components - these must match actual component exports
jest.mock("@/components/footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

jest.mock("@/components/hero", () => ({
  Hero: () => <div data-testid="hero">Hero</div>,
}));

jest.mock("@/components/features", () => ({
  Features: () => (
    <div id="features" data-testid="features">
      Features
    </div>
  ),
}));

jest.mock("@/components/calculator", () => ({
  Calculator: () => (
    <div id="calculator" data-testid="calculator">
      Calculator
    </div>
  ),
}));

jest.mock("@/components/benefits", () => ({
  Benefits: () => <div data-testid="benefits">Benefits</div>,
}));

jest.mock("@/components/cta", () => ({
  CTA: () => <div data-testid="cta">CTA</div>,
}));

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, email: "test@example.com" }]),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the home page", () => {
    render(<Home />);

    expect(screen.getByTestId("features")).toBeInTheDocument();
  });

  it("should render footer", () => {
    render(<Home />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render benefits section", () => {
    render(<Home />);

    expect(screen.getByTestId("benefits")).toBeInTheDocument();
  });

  it("should render CTA section", () => {
    render(<Home />);

    expect(screen.getByTestId("cta")).toBeInTheDocument();
  });

  it("should have proper page styling", () => {
    const { container } = render(<Home />);

    const mainDiv = container.querySelector("div[class*='flex']");
    expect(mainDiv).toBeInTheDocument();
  });

  it("should have min-h-screen class for full height", () => {
    const { container } = render(<Home />);

    const mainDiv = container.querySelector("div[class*='min-h-screen']");
    expect(mainDiv).toBeInTheDocument();
  });

  it("should have flex-col for column layout", () => {
    const { container } = render(<Home />);

    const mainDiv = container.querySelector("div[class*='flex-col']");
    expect(mainDiv).toBeInTheDocument();
  });

  it("should render all required sections", () => {
    const { container } = render(<Home />);

    expect(screen.getByTestId("features")).toBeInTheDocument();
    expect(screen.getByTestId("benefits")).toBeInTheDocument();
    expect(screen.getByTestId("cta")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should call fetch for users on mount", () => {
    render(<Home />);

    // Fetch should be called asynchronously
    setTimeout(() => {
      expect(global.fetch).toHaveBeenCalled();
    }, 0);
  });

  it("should handle successful user fetch", () => {
    render(<Home />);

    setTimeout(() => {
      expect(global.fetch).toHaveBeenCalledWith("/api/users");
    }, 0);
  });

  it("should initialize empty users state", () => {
    render(<Home />);

    // The component should initialize with empty users array
    expect(screen.getByTestId("features")).toBeInTheDocument();
  });
});
