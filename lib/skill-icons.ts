import {
  Rocket,
  Atom,
  Braces,
  FileCode2,
  Wind,
  Box,
  Sparkles,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  MessageCircle,
  Star,
  Search,
  Palette,
  type LucideIcon,
} from "lucide-react";

export const SKILL_ICONS: Record<string, LucideIcon> = {
  Rocket,
  Atom,
  Braces,
  FileCode2,
  Wind,
  Box,
  Sparkles,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  MessageCircle,
  Star,
  Search,
  Palette,
};

export const SKILL_ICON_NAMES = Object.keys(SKILL_ICONS);

export function getSkillIcon(name: string): LucideIcon {
  return SKILL_ICONS[name] ?? Sparkles;
}
