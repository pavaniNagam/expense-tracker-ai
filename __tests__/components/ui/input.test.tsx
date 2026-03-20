import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "@/components/ui/input";

describe("Input Component", () => {
  it("should render input element", () => {
    const { container } = render(<Input />);
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  it("should accept placeholder prop", () => {
    const { container } = render(<Input placeholder="Enter text" />);
    const input = container.querySelector("input") as HTMLInputElement;
    expect(input?.placeholder).toBe("Enter text");
  });

  it("should accept type prop", () => {
    const { container } = render(<Input type="password" />);
    const input = container.querySelector("input") as HTMLInputElement;
    expect(input?.type).toBe("password");
  });

  it("should be focusable", () => {
    const { container } = render(<Input />);
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
    input?.focus();
    expect(document.activeElement).toBe(input);
  });

  it("should accept disabled prop", () => {
    const { container } = render(<Input disabled />);
    const input = container.querySelector("input") as HTMLInputElement;
    expect(input?.disabled).toBe(true);
  });
});
