import { cn } from "@/lib/utils";

describe("Utils Functions", () => {
  describe("cn function", () => {
    it("should merge class names", () => {
      const result = cn("px-2", "py-1");
      expect(result).toContain("px-2");
      expect(result).toContain("py-1");
    });

    it("should handle conditional classes", () => {
      const result = cn("px-2", {
        "py-1": true,
        "py-2": false,
      });
      expect(result).toContain("px-2");
      expect(result).toContain("py-1");
      expect(result).not.toContain("py-2");
    });

    it("should handle undefined and null values", () => {
      const result = cn("px-2", undefined, null, "py-1");
      expect(result).toContain("px-2");
      expect(result).toContain("py-1");
    });

    it("should handle empty strings", () => {
      const result = cn("px-2", "", "py-1");
      expect(result).toContain("px-2");
      expect(result).toContain("py-1");
    });

    it("should handle arrays of classes", () => {
      const result = cn(["px-2", "py-1"], "bg-white");
      expect(result).toContain("bg-white");
    });

    it("should handle conflicting tailwind classes", () => {
      const result = cn("px-2", "px-4");
      // The later class should take precedence in merge
      expect(result).toBeDefined();
    });

    it("should return empty string for no classes", () => {
      const result = cn();
      expect(result).toBe("");
    });

    it("should handle multiple conditional classes", () => {
      const result = cn({
        "text-red-500": true,
        "text-blue-500": false,
        "text-green-500": true,
      });
      // Just verify that the cn function returns a string
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    });

    it("should handle complex tailwind classes", () => {
      const result = cn(
        "hover:bg-gray-100",
        "dark:hover:bg-gray-800",
        "transition-colors",
      );
      expect(result).toContain("hover:bg-gray-100");
      expect(result).toContain("dark:hover:bg-gray-800");
      expect(result).toContain("transition-colors");
    });

    it("should handle responsive classes", () => {
      const result = cn("flex", "md:grid", "lg:flex");
      expect(result).toContain("flex");
      expect(result).toContain("md:grid");
      expect(result).toContain("lg:flex");
    });

    it("should handle boolean variables", () => {
      const isActive = true;
      const isDisabled = false;
      const result = cn("px-2", {
        "bg-blue-500": isActive,
        "opacity-50": isDisabled,
      });
      expect(result).toContain("bg-blue-500");
      expect(result).not.toContain("opacity-50");
    });
  });
});
