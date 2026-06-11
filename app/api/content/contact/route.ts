import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const contact = await prisma.contactInfo.findUnique({ where: { id: 1 } });
  return NextResponse.json(contact);
}

export async function PUT(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as {
    brand?: string;
    name?: string;
    role?: string;
    location?: string;
    email?: string;
    phoneDisplay?: string;
    phoneTel?: string;
    whatsappNumber?: string;
    tagline?: string;
  };

  const required: (keyof typeof data)[] = [
    "brand",
    "name",
    "role",
    "location",
    "email",
    "phoneDisplay",
    "phoneTel",
    "whatsappNumber",
    "tagline",
  ];

  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json({ error: `${field} is required.` }, { status: 400 });
    }
  }

  const contact = await prisma.contactInfo.upsert({
    where: { id: 1 },
    update: data as Required<typeof data>,
    create: { id: 1, ...(data as Required<typeof data>) },
  });

  return NextResponse.json(contact);
}
