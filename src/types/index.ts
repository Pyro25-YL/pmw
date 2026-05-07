// ─── NAVIGATION ───
export interface NavLink {
  href: string;
  label: string;
}

// ─── HERO ───
export interface StatItem {
  num: string;
  label: string;
}

// ─── ABOUT ───
export interface Pillar {
  icon: string;
  label: string;
}

export interface VisionMissionItem {
  label: string;
  color: string;
  lineColor: string;
  text: string;
}

// ─── SERVICES ───
export interface Service {
  icon: string;
  name: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
}

// ─── PRODUCTS ───
export type ProductTab = 'finance' | 'invest' | 'pos';

export interface PriceCard {
  plan: string;
  value: string;
  period: string;
  color: string;
  featured?: boolean;
}

export interface ProductFeature {
  text: string;
}

export interface Product {
  id: ProductTab;
  badge: string;
  badgeVariant?: 'default' | 'purple' | 'green';
  name: string;
  description: string;
  features: ProductFeature[];
  pricing: PriceCard[];
  mockUrl: string;
  tabLabel: string;
  tabIcon: string;
}

// ─── PORTFOLIO ───
export interface PortfolioItem {
  icon: string;
  name: string;
  tags: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: string;
}

// ─── TESTIMONIALS ───
export interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatarLetter: string;
  avatarGradient: string;
  delay?: string;
}

// ─── PRICING ───
export interface PricingPlan {
  name: string;
  price: string;
  desc: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaVariant: 'outline' | 'cyan';
  popular?: boolean;
  delay?: string;
}

// ─── BLOG ───
export interface BlogPost {
  icon: string;
  gradient: string;
  category: string;
  categoryColor: string;
  title: string;
  meta: string;
  delay?: string;
}

// ─── FAQ ───
export interface FaqItem {
  question: string;
  answer: string;
}

// ─── CONTACT ───
export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

// ─── CHAT ───
export interface ChatMessage {
  role: 'bot' | 'user';
  text: string;
}
