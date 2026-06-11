export interface HeroData {
  headline: string;
  subline: string;
}

export interface AboutData {
  title: string;
  body: string;
}

export interface ContactData {
  brand: string;
  name: string;
  role: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  tagline: string;
}

export interface SkillData {
  id: string;
  label: string;
  icon: string;
  order: number;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  order: number;
}
