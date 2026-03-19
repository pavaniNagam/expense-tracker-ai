import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Require Clerk authentication
    const { userId } = await auth();
    if (!userId) {
      return Response.json(
        { error: "Unauthorized. Please log in with Clerk." },
        { status: 401 },
      );
    }

    const users = await prisma.user.findMany();
    return Response.json(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return Response.json([], { status: 500 });
  }
}
