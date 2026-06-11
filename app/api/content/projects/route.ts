import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await prisma.project.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    tags?: string[];
    order?: number;
  };

  if (!data.title || !data.description || !data.url || !data.image) {
    return NextResponse.json(
      { error: "title, description, url, and image are required." },
      { status: 400 }
    );
  }

  const project = await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      url: data.url,
      image: data.image,
      tags: data.tags ?? [],
      order: data.order ?? 0,
    },
  });

  return NextResponse.json(project, { status: 201 });
}
