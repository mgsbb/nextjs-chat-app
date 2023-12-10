import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const { userId } = await request.json();

    const existingConversations = await prisma.conversation.findMany({
      where: {
        OR: [
          { userIds: { equals: [currentUser?.id, userId] } },
          { userIds: { equals: [userId, currentUser?.id] } },
        ],
      },
    });

    const singleConversation = existingConversations[0];

    if (singleConversation) {
      return NextResponse.json({ conversationId: singleConversation.id });
    }

    const newConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [{ id: currentUser?.id }, { id: userId }],
        },
      },
    });

    return NextResponse.json({ conversationId: newConversation.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
