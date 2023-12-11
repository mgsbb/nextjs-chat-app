import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prisma";
import { pusherServer } from "@/libs/pusher";

export async function POST(request: Request) {
  try {
    const { message, conversationId } = await request.json();
    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newMessage = await prisma.message.create({
      include: {
        sender: true,
      },
      data: {
        body: message,
        conversation: {
          connect: { id: conversationId },
        },
        sender: {
          connect: { id: currentUser.id },
        },
      },
    });

    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messagesIds: {
          push: newMessage.id,
        },
      },
      include: {
        users: true,
        messages: true,
      },
    });

    pusherServer.trigger(conversationId, "messages:new", newMessage);

    return NextResponse.json({ message }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
