import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.heroContent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      headline: "Maya — web experiences that ship.",
      subline:
        "I design and build fast, beautiful, production-ready websites — from sleek marketing showcases to full e-commerce platforms — launched fast and built to last.",
    },
  });

  await prisma.aboutContent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "A developer who turns ideas into production-ready websites.",
      body:
        "I'm Anupam Gowda, a freelance web developer focused on designing and building modern, high-performance websites — and getting them live, fast.\n\nMy work spans from polished marketing showcases to full e-commerce platforms with shopping carts, wishlists, daily offers, customer reviews, and secure admin dashboards. Every project is built to be fast, accessible, and easy to maintain long after launch.",
    },
  });

  await prisma.contactInfo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      brand: "Maya",
      name: "Anupam Gowda",
      role: "Freelance Web Developer",
      location: "Bengaluru, India",
      email: "anupamgowda1999@gmail.com",
      phoneDisplay: "+91 72042 15343",
      phoneTel: "+917204215343",
      whatsappNumber: "917204215343",
      tagline: "Web experiences that ship.",
    },
  });

  const skills = [
    { label: "Next.js", icon: "Rocket" },
    { label: "React", icon: "Atom" },
    { label: "TypeScript", icon: "Braces" },
    { label: "HTML5 & CSS3", icon: "FileCode2" },
    { label: "Tailwind CSS", icon: "Wind" },
    { label: "Three.js / React Three Fiber", icon: "Box" },
    { label: "Framer Motion", icon: "Sparkles" },
    { label: "Responsive Design", icon: "Smartphone" },
    { label: "E-commerce (Cart, Wishlist, Checkout)", icon: "ShoppingCart" },
    { label: "Admin Dashboards", icon: "LayoutDashboard" },
    { label: "WhatsApp Ordering Integration", icon: "MessageCircle" },
    { label: "Customer Review Systems", icon: "Star" },
    { label: "SEO", icon: "Search" },
    { label: "Production Deployment", icon: "Palette" },
  ];

  for (const [index, skill] of skills.entries()) {
    await prisma.skill.upsert({
      where: { id: `seed-skill-${index}` },
      update: {},
      create: { id: `seed-skill-${index}`, order: index, ...skill },
    });
  }

  const projects = [
    {
      title: "Miele Kitchen",
      description:
        "A warm, honey-themed showcase site for a Bengaluru cloud kitchen and bakery. Features a curated menu (cheesecakes, brownies, cupcakes, tarts), direct WhatsApp ordering, a live customer-review system with photo uploads, and a kitchen gallery.",
      url: "https://mielekitchen.vercel.app/",
      image: "https://mielekitchen.vercel.app/menu/biscoff-cheesecake.jpg",
      tags: ["Next.js", "React", "Tailwind", "WhatsApp integration", "Reviews system", "Responsive"],
    },
    {
      title: "PV Designer Studio",
      description:
        "A full e-commerce experience for a bespoke bridal and ethnic-wear label. 100+ products across women's, men's and kids' categories, with cart, wishlist, daily offers, a review carousel, multi-location maps, an Instagram feed, worldwide-delivery messaging, and a secure admin dashboard.",
      url: "https://pv-designer-studio.vercel.app/",
      image: "https://pv-designer-studio.vercel.app/images/extra/extra-1.jpg",
      tags: ["Next.js", "E-commerce", "Cart & Wishlist", "Admin panel", "Maps", "SEO", "Responsive"],
    },
  ];

  for (const [index, project] of projects.entries()) {
    await prisma.project.upsert({
      where: { id: `seed-project-${index}` },
      update: {},
      create: { id: `seed-project-${index}`, order: index, ...project },
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
