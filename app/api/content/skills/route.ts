import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const skills = await prisma.skill.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(skills);
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as {
    label?: string;
    icon?: string;
    order?: number;
  };

  if (!data.label || !data.icon) {
    return NextResponse.json({ error: "label and icon are required." }, { status: 400 });
  }

  const skill = await prisma.skill.create({
    data: {
      label: data.label,
      icon: data.icon,
      order: data.order ?? 0,
    },
  });

  return NextResponse.json(skill, { status: 201 });
}
