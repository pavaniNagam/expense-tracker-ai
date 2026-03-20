import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { GET } from "@/app/api/users/route";

// Mock Clerk auth
jest.mock("@clerk/nextjs/server", () => ({
  auth: jest.fn(),
}));

// Mock Prisma
jest.mock("@/lib/prisma", () => ({
  __esModule: true,
  default: {
    user: {
      findMany: jest.fn(),
    },
  },
}));

// Mock Response globally
global.Response = {
  json: jest.fn((data, init) => ({
    status: init?.status || 200,
    json: jest.fn(() => Promise.resolve(data)),
  })),
} as any;

describe("GET /api/users", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 401 if user is not authenticated", async () => {
    (auth as unknown as jest.Mock).mockResolvedValue({ userId: null });

    const response = await GET();

    // Response.json returns a Response-like object
    expect((response as any).status).toBe(401);
  });

  it("should return 200 status if authenticated", async () => {
    (auth as unknown as jest.Mock).mockResolvedValue({ userId: "user123" });
    const mockUsers = [{ id: 1, email: "test@example.com", name: "Test User" }];
    (prisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const response = await GET();

    // Response.json returns a Response-like object with 200 status by default
    expect((response as any).status).toBe(200);
  });

  it("should return 500 on database error", async () => {
    (auth as unknown as jest.Mock).mockResolvedValue({ userId: "user123" });
    (prisma.user.findMany as jest.Mock).mockRejectedValue(
      new Error("Database error"),
    );

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    const response = await GET();

    expect((response as any).status).toBe(500);
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
