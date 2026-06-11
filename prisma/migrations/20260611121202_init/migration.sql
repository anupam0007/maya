-- CreateTable
CREATE TABLE "HeroContent" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "headline" TEXT NOT NULL,
    "subline" TEXT NOT NULL,

    CONSTRAINT "HeroContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutContent" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "AboutContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneDisplay" TEXT NOT NULL,
    "phoneTel" TEXT NOT NULL,
    "whatsappNumber" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "tags" TEXT[],
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);
