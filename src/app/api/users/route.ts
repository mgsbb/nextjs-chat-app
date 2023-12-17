import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import getSession from "@/actions/getSession";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const searchQuery = searchParams.get("search") || "";
    const session = await getSession();

    const regExp = new RegExp(searchQuery as string, "i");

    if (!session?.user?.email) {
      return [];
    }

    // find all users except current session user
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
        // name: { contains: searchQuery },
        // email: { contains: searchQuery },
        // OR: [
        //   { name: { contains: searchQuery } },
        //   { email: { contains: searchQuery } },
        // ],
      },
    });

    const results = users.filter((user) => {
      if (regExp.test(user.email!) || regExp.test(user.name!)) {
        return user;
      }
    });
    // console.log(results);

    return NextResponse.json({ users: results }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 200 });
  }
}
