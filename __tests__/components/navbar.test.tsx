import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "@/components/navbar";

// Mock Clerk components
jest.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="signed-in">{children}</div>
  ),
  SignedOut: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="signed-out">{children}</div>
  ),
  UserButton: () => <div>UserButton</div>,
  SignInButton: () => <button>Sign In</button>,
  SignUpButton: () => <button>Sign Up</button>,
}));

describe("Navbar Component", () => {
  it("should render navbar", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render signed in content", () => {
    render(<Navbar />);
    expect(screen.getByTestId("signed-in")).toBeInTheDocument();
  });

  it("should render signed out content", () => {
    render(<Navbar />);
    expect(screen.getByTestId("signed-out")).toBeInTheDocument();
  });

  it("should render UserButton for signed in users", () => {
    render(<Navbar />);
    expect(screen.getByText("UserButton")).toBeInTheDocument();
  });

  it("should have proper navigation structure", () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
    expect(nav?.className).toBeDefined();
  });
});
