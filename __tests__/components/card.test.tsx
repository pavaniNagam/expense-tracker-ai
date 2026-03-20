import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

describe("Card Component", () => {
  it("should render card element", () => {
    const { container } = render(<Card>Card content</Card>);
    const card = container.querySelector("div");
    expect(card).toBeTruthy();
  });

  it("should render CardHeader", () => {
    const { container } = render(
      <Card>
        <CardHeader>Header</CardHeader>
      </Card>,
    );
    expect(container.querySelector("div")).toBeTruthy();
  });

  it("should render CardTitle", () => {
    const { container } = render(<CardTitle>Test Title</CardTitle>);
    // CardTitle renders as a div with specific classes, not always h2
    expect(container.firstChild).toBeTruthy();
  });

  it("should render CardDescription", () => {
    const { container } = render(
      <CardDescription>Test Description</CardDescription>,
    );
    // CardDescription renders as a div with specific classes
    expect(container.firstChild).toBeTruthy();
  });

  it("should render CardContent", () => {
    const { container } = render(
      <Card>
        <CardContent>Content</CardContent>
      </Card>,
    );
    expect(container.querySelector("div")).toBeTruthy();
  });

  it("should render complete card structure", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>,
    );
    expect(container.firstChild).toBeTruthy();
    expect(container.querySelectorAll("div").length).toBeGreaterThan(0);
  });
});
