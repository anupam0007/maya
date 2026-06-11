import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function PUT(request: NextRequest, { params }: Params) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as {
    label?: string;
    icon?: string;
    order?: number;
  };

  const skill = await prisma.skill.update({
    where: { id: params.id },
    data,
  });

  return NextResponse.json(skill);
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.skill.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
