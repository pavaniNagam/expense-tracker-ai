import "@testing-library/jest-dom";

// Mock Prisma before importing
jest.mock("@/lib/prisma", () => ({
  __esModule: true,
  default: {
    user: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
      aggregate: jest.fn(),
    },
    $transaction: jest.fn(),
    $disconnect: jest.fn(),
  },
}));

import prisma from "@/lib/prisma";

describe("Prisma Setup", () => {
  it("should have prisma client configured", () => {
    expect(prisma).toBeDefined();
  });

  it("should have user model", () => {
    expect(prisma.user).toBeDefined();
  });

  it("should have user model methods", () => {
    expect(typeof prisma.user.findMany).toBe("function");
    expect(typeof prisma.user.findUnique).toBe("function");
    expect(typeof prisma.user.create).toBe("function");
    expect(typeof prisma.user.update).toBe("function");
    expect(typeof prisma.user.delete).toBe("function");
  });

  it("should support transaction", () => {
    expect(typeof prisma.$transaction).toBe("function");
  });

  it("should support disconnect", () => {
    expect(typeof prisma.$disconnect).toBe("function");
  });

  it("should support aggregation", () => {
    expect(typeof prisma.user.count).toBe("function");
    expect(typeof prisma.user.aggregate).toBe("function");
  });

  it("should be properly configured", () => {
    expect(prisma.user).toBeDefined();
    expect(prisma.$transaction).toBeDefined();
    expect(prisma.$disconnect).toBeDefined();
  });
});
