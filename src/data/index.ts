import type {
  NavLink, StatItem, Pillar, VisionMissionItem,
  Service, Product, PortfolioItem, Testimonial,
  PricingPlan, BlogPost, FaqItem, ContactLink,
} from '../types';

// ─── NAV ───
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// ─── HERO ───
export const HERO_STATS: StatItem[] = [
  { num: '50+', label: 'Proyek Selesai' },
  { num: '30+', label: 'Klien Puas' },
  { num: '3', label: 'Produk SaaS' },
  { num: '99%', label: 'Uptime' },
];

export const HERO_BAR_HEIGHTS: number[] = [40, 65, 50, 80, 60, 90, 75, 85];

// ─── ABOUT ───
export const PILLARS: Pillar[] = [
  { icon: '🤖', label: 'Artificial Intelligence' },
  { icon: '⚙️', label: 'Algoritma & Automasi' },
  { icon: '🌐', label: 'Web Development' },
  { icon: '💬', label: 'Smart Chatbot' },
  { icon: '📱', label: 'Mobile App' },
  { icon: '☁️', label: 'Cloud & Hosting' },
];

export const VISION_MISSION: VisionMissionItem[] = [
  {
    label: 'VISI',
    color: 'var(--cyan)',
    lineColor: 'var(--cyan)',
    text: 'Menjadi mitra teknologi terpercaya bagi bisnis Indonesia dalam mewujudkan transformasi digital berbasis AI yang berdampak nyata dan berkelanjutan.',
  },
  {
    label: 'MISI',
    color: 'var(--purple2)',
    lineColor: 'var(--purple2)',
    text: 'Menghadirkan solusi IT inovatif yang terukur, aksesibel, dan berorientasi hasil — membantu setiap bisnis, dari startup hingga enterprise, memanfaatkan kekuatan teknologi modern.',
  },
  {
    label: 'NILAI',
    color: 'var(--green)',
    lineColor: 'var(--green)',
    text: 'Inovasi tanpa henti, integritas dalam setiap solusi, dan komitmen penuh terhadap kepuasan klien.',
  },
];

// ─── SERVICES ───
export const SERVICES: Service[] = [
  { icon: '🤖', name: 'AI Development', desc: 'Custom AI model, machine learning pipeline, computer vision & NLP solutions untuk kebutuhan bisnis Anda.', gradientFrom: 'rgba(0,212,255,0.15)', gradientTo: 'rgba(30,107,255,0.15)' },
  { icon: '💬', name: 'Smart Chatbot', desc: 'Chatbot AI cerdas terintegrasi WhatsApp, Telegram, website dengan kemampuan natural language processing.', gradientFrom: 'rgba(124,58,237,0.15)', gradientTo: 'rgba(168,85,247,0.15)' },
  { icon: '🌐', name: 'Website Development', desc: 'Website modern, responsif, SEO-friendly dengan performa tinggi untuk meningkatkan presence digital bisnis Anda.', gradientFrom: 'rgba(0,229,160,0.15)', gradientTo: 'rgba(30,107,255,0.15)' },
  { icon: '📱', name: 'Mobile App Dev', desc: 'Aplikasi mobile Android & iOS yang intuitif, scalable, dan terintegrasi dengan sistem bisnis Anda.', gradientFrom: 'rgba(255,124,46,0.15)', gradientTo: 'rgba(255,77,109,0.15)' },
  { icon: '⚙️', name: 'Automation System', desc: 'Otomasi proses bisnis dengan workflow cerdas, RPA, dan integrasi antar sistem untuk efisiensi operasional.', gradientFrom: 'rgba(0,212,255,0.15)', gradientTo: 'rgba(0,229,160,0.15)' },
  { icon: '🎨', name: 'UI/UX Design', desc: 'Desain antarmuka modern yang berfokus pada pengalaman pengguna terbaik dengan estetika premium.', gradientFrom: 'rgba(168,85,247,0.15)', gradientTo: 'rgba(255,77,109,0.15)' },
  { icon: '☁️', name: 'Cloud & Hosting', desc: 'Setup cloud infrastructure, deployment, monitoring, dan maintenance untuk performa optimal 24/7.', gradientFrom: 'rgba(30,107,255,0.15)', gradientTo: 'rgba(0,212,255,0.15)' },
  { icon: '📊', name: 'Business Digitalization', desc: 'Konsultasi & implementasi transformasi digital end-to-end untuk bisnis konvensional menuju era digital.', gradientFrom: 'rgba(0,229,160,0.15)', gradientTo: 'rgba(255,124,46,0.15)' },
];

// ─── PRODUCTS ───
export const PRODUCTS: Product[] = [
  {
    id: 'finance',
    badge: 'SaaS · Financial',
    badgeVariant: 'default',
    name: 'NexaFinance',
    tabLabel: 'NexaFinance',
    tabIcon: '💰',
    description: 'Platform manajemen keuangan cerdas untuk bisnis dan UMKM. Pantau cashflow, analisis profit, dan dapatkan insight finansial berbasis AI secara real-time.',
    features: [
      { text: 'Dashboard keuangan' }, { text: 'Tracking pemasukan & pengeluaran' },
      { text: 'Laporan otomatis' }, { text: 'Grafik cashflow interaktif' },
      { text: 'AI financial insight' }, { text: 'Kalkulator investasi' },
      { text: 'Simulasi ROI' }, { text: 'Export PDF & Excel' },
    ],
    pricing: [
      { plan: 'Basic', value: 'Rp49K', period: '/bulan', color: 'var(--text2)' },
      { plan: 'Pro', value: 'Rp149K', period: '/bulan', color: 'var(--cyan)', featured: true },
      { plan: 'Business', value: 'Rp299K', period: '/bulan', color: 'var(--purple2)' },
    ],
    mockUrl: 'nexafinance.id/dashboard',
  },
  {
    id: 'invest',
    badge: 'SaaS · Investment',
    badgeVariant: 'purple',
    name: 'NexaInvest',
    tabLabel: 'NexaInvest',
    tabIcon: '📈',
    description: 'Platform kalkulator investasi berbasis AI. Simulasikan pertumbuhan investasi, analisis risiko, dan dapatkan rekomendasi portofolio cerdas.',
    features: [
      { text: 'Kalkulator investasi saham' }, { text: 'Simulasi compound interest' },
      { text: 'Analisis profit mendalam' }, { text: 'Prediksi pertumbuhan AI' },
      { text: 'Grafik interaktif' }, { text: 'Risk analysis' },
    ],
    pricing: [
      { plan: 'Free', value: 'Rp0', period: 'Fitur dasar', color: 'var(--text2)' },
      { plan: 'Premium', value: 'Rp79K', period: '/bulan', color: 'var(--purple2)', featured: true },
    ],
    mockUrl: 'nexainvest.id/simulator',
  },
  {
    id: 'pos',
    badge: 'SaaS · POS',
    badgeVariant: 'green',
    name: 'NexaPOS',
    tabLabel: 'NexaPOS',
    tabIcon: '🛒',
    description: 'Sistem kasir pintar all-in-one untuk UMKM dan bisnis modern. Kelola penjualan, stok, analitik, dan laporan dalam satu platform terintegrasi.',
    features: [
      { text: 'POS kasir modern' }, { text: 'Manajemen stok real-time' },
      { text: 'Barcode scanner' }, { text: 'Dashboard analitik' },
      { text: 'AI sales prediction' }, { text: 'Integrasi WhatsApp' },
      { text: 'Multi-cabang & role' }, { text: 'Cloud backup' },
    ],
    pricing: [
      { plan: 'Starter', value: 'Rp99K', period: '/bulan', color: 'var(--text2)' },
      { plan: 'Business', value: 'Rp249K', period: '/bulan', color: 'var(--green)', featured: true },
      { plan: 'Buy Once', value: 'Custom', period: 'Source Code', color: 'var(--orange)' },
    ],
    mockUrl: 'nexapos.id/kasir',
  },
];

// ─── PORTFOLIO ───
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { icon: '🛒', name: 'Web E-Commerce', tags: 'React · Next.js · Tailwind', gradientFrom: 'rgba(30,107,255,0.2)', gradientTo: 'rgba(0,212,255,0.1)' },
  { icon: '🔍', name: 'AI Hoax Detection', tags: 'Python · NLP · BERT', gradientFrom: 'rgba(124,58,237,0.2)', gradientTo: 'rgba(168,85,247,0.1)', delay: '0.1s' },
  { icon: '🌾', name: 'Smart Agriculture', tags: 'IoT · AI · Dashboard', gradientFrom: 'rgba(0,229,160,0.2)', gradientTo: 'rgba(30,107,255,0.1)', delay: '0.15s' },
  { icon: '🅿️', name: 'Smart Parking', tags: 'IoT · Computer Vision', gradientFrom: 'rgba(255,124,46,0.2)', gradientTo: 'rgba(255,77,109,0.1)', delay: '0.2s' },
  { icon: '🎓', name: 'Academic Chatbot', tags: 'LLM · RAG · FastAPI', gradientFrom: 'rgba(0,212,255,0.2)', gradientTo: 'rgba(124,58,237,0.1)', delay: '0.05s' },
  { icon: '🎉', name: 'Web Event Finder', tags: 'React · Node.js · Maps', gradientFrom: 'rgba(168,85,247,0.2)', gradientTo: 'rgba(0,212,255,0.1)', delay: '0.1s' },
  { icon: '📱', name: 'App Koperasi', tags: 'React Native · Firebase', gradientFrom: 'rgba(0,229,160,0.2)', gradientTo: 'rgba(255,124,46,0.1)', delay: '0.15s' },
  { icon: '📊', name: 'AI Market Analysis', tags: 'Python · ML · Visualization', gradientFrom: 'rgba(30,107,255,0.2)', gradientTo: 'rgba(0,229,160,0.1)', delay: '0.2s' },
];

// ─── TESTIMONIALS ───
export const TESTIMONIALS: Testimonial[] = [
  {
    text: '"NexaMind benar-benar mengubah cara kami mengelola keuangan. NexaFinance sangat intuitif dan insight AI-nya membantu kami mengambil keputusan lebih cepat dan tepat."',
    name: 'Budi Santoso', role: 'CEO, PT Maju Jaya Digital',
    avatarLetter: 'B', avatarGradient: 'linear-gradient(135deg,var(--blue),var(--cyan))',
  },
  {
    text: '"Chatbot WhatsApp yang dibuat NexaMind untuk toko kami luar biasa! Respon pelanggan meningkat 300% dan tim kami jadi lebih fokus ke hal yang lebih penting."',
    name: 'Sari Dewi', role: 'Owner, Toko Online Nusantara',
    avatarLetter: 'S', avatarGradient: 'linear-gradient(135deg,var(--purple),var(--purple2))',
    delay: '0.1s',
  },
  {
    text: '"NexaPOS adalah solusi terbaik untuk restoran kami. Fitur multi-cabang dan AI prediction-nya sangat membantu planning stok. Recommended banget!"',
    name: 'Ahmad Fauzi', role: 'Owner, Warung Makan Berkah',
    avatarLetter: 'A', avatarGradient: 'linear-gradient(135deg,var(--green),var(--blue))',
    delay: '0.2s',
  },
];

// ─── PRICING ───
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter', price: 'Rp 2.5jt',
    desc: 'Cocok untuk startup & UMKM yang baru memulai transformasi digital.',
    features: [
      { text: 'Landing Page Modern', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Custom Dashboard', included: false },
      { text: 'AI Integration', included: false },
    ],
    cta: 'Mulai Sekarang', ctaVariant: 'outline',
  },
  {
    name: 'Professional', price: 'Rp 8jt', popular: true,
    desc: 'Untuk bisnis yang membutuhkan sistem digital komprehensif dengan AI.',
    features: [
      { text: 'Website Full-Stack', included: true },
      { text: 'Admin Dashboard', included: true },
      { text: 'AI Chatbot Basic', included: true },
      { text: 'Database Integration', included: true },
      { text: 'API Development', included: true },
      { text: '3 Bulan Support', included: true },
    ],
    cta: 'Mulai Sekarang', ctaVariant: 'cyan', delay: '0.1s',
  },
  {
    name: 'Enterprise', price: 'Custom',
    desc: 'Solusi enterprise skala penuh dengan AI advanced dan integrasi sistem kompleks.',
    features: [
      { text: 'Custom AI System', included: true },
      { text: 'Multi-platform App', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Cloud Infrastructure', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Dedicated Manager', included: true },
    ],
    cta: 'Hubungi Kami', ctaVariant: 'outline', delay: '0.2s',
  },
];

// ─── BLOG ───
export const BLOG_POSTS: BlogPost[] = [
  {
    icon: '🤖', gradient: 'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(30,107,255,0.1))',
    category: 'Artificial Intelligence', categoryColor: 'var(--cyan)',
    title: 'Bagaimana AI Mengubah Lanskap Bisnis UMKM Indonesia di 2025',
    meta: '12 Jan 2025 · 8 min read',
  },
  {
    icon: '💬', gradient: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(168,85,247,0.1))',
    category: 'Chatbot', categoryColor: 'var(--purple2)',
    title: 'WhatsApp Chatbot vs Live Chat: Mana yang Lebih Efektif untuk Bisnis?',
    meta: '5 Jan 2025 · 6 min read', delay: '0.1s',
  },
  {
    icon: '📊', gradient: 'linear-gradient(135deg,rgba(0,229,160,0.15),rgba(30,107,255,0.1))',
    category: 'Transformasi Digital', categoryColor: 'var(--green)',
    title: '5 Langkah Digitalisasi Bisnis yang Wajib Anda Lakukan di 2025',
    meta: '28 Des 2024 · 10 min read', delay: '0.2s',
  },
];

// ─── FAQ ───
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Berapa lama proses pengembangan website?',
    answer: 'Tergantung kompleksitas proyek. Landing page sederhana dapat selesai dalam 1-2 minggu, sementara web app kompleks dengan AI integration memerlukan 4-12 minggu. Kami akan memberikan estimasi yang jelas di awal.',
  },
  {
    question: 'Apakah ada garansi dan support setelah proyek selesai?',
    answer: 'Ya, setiap proyek dilengkapi dengan garansi bug fixing minimal 1 bulan. Paket Professional mendapat support 3 bulan, sedangkan Enterprise mendapat support berkelanjutan 24/7.',
  },
  {
    question: 'Bisakah produk SaaS (NexaFinance, NexaPOS) dikustomisasi?',
    answer: 'Tentu! Semua produk kami dirancang untuk dapat dikustomisasi. Anda bisa request fitur tambahan, perubahan branding, hingga pembelian source code penuh untuk dikelola secara mandiri.',
  },
  {
    question: 'Teknologi apa yang digunakan dalam pengembangan?',
    answer: 'Kami menggunakan stack modern: React/Next.js, Python/FastAPI, Node.js untuk backend, PostgreSQL/MongoDB untuk database, dan berbagai AI framework seperti LangChain, OpenAI API, dan model open-source.',
  },
  {
    question: 'Bagaimana cara memulai konsultasi?',
    answer: 'Sangat mudah! Isi form konsultasi di bawah atau hubungi kami via WhatsApp. Tim kami akan menghubungi Anda dalam 1x24 jam untuk mendiskusikan kebutuhan proyek secara detail.',
  },
];

// ─── CONTACT ───
export const CONTACT_LINKS: ContactLink[] = [
  { icon: '💬', label: 'WhatsApp', value: '+62 812-3456-7890', href: 'https://wa.me/6281234567890' },
  { icon: '📧', label: 'Email', value: 'hello@nexamind.id', href: 'mailto:hello@nexamind.id' },
  { icon: '📸', label: 'Instagram', value: '@nexamindsolutions', href: '#' },
  { icon: '💼', label: 'LinkedIn', value: 'NexaMind Solutions', href: '#' },
];

// ─── CHAT BOT RESPONSES ───
export const CHAT_RESPONSES: string[] = [
  'Tentu! Kami menyediakan berbagai layanan mulai dari AI development, chatbot, website, hingga konsultasi transformasi digital. 🚀',
  'Untuk konsultasi gratis, Anda bisa isi form di bagian Contact atau hubungi kami via WhatsApp. Tim kami siap membantu! 💪',
  'Produk unggulan kami: NexaFinance (manajemen keuangan), NexaInvest (kalkulator investasi), dan NexaPOS (sistem kasir pintar). 🎯',
  'Harga kami kompetitif dan transparan. Untuk proyek website mulai dari Rp 2.5 juta. Hubungi kami untuk estimasi spesifik! 💰',
  'Proses pengembangan biasanya 1-12 minggu tergantung kompleksitas. Kami selalu tepat waktu dan sesuai brief! ⚡',
];
