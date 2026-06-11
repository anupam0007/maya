import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const about = await prisma.aboutContent.findUnique({ where: { id: 1 } });
  return NextResponse.json(about);
}

export async function PUT(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, body } = (await request.json()) as {
    title?: string;
    body?: string;
  };

  if (!title || !body) {
    return NextResponse.json({ error: "title and body are required." }, { status: 400 });
  }

  const about = await prisma.aboutContent.upsert({
    where: { id: 1 },
    update: { title, body },
    create: { id: 1, title, body },
  });

  return NextResponse.json(about);
}
