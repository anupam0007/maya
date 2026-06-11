import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const hero = await prisma.heroContent.findUnique({ where: { id: 1 } });
  return NextResponse.json(hero);
}

export async function PUT(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { headline, subline } = (await request.json()) as {
    headline?: string;
    subline?: string;
  };

  if (!headline || !subline) {
    return NextResponse.json({ error: "headline and subline are required." }, { status: 400 });
  }

  const hero = await prisma.heroContent.upsert({
    where: { id: 1 },
    update: { headline, subline },
    create: { id: 1, headline, subline },
  });

  return NextResponse.json(hero);
}
