export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const designTools = [
  {
    name: "Adobe Photoshop",
    category: "Raster & Photo",
    description: "Photo retouching, compositing, and digital artwork.",
    color: "#31A8FF",
    img: "/tools/adobe-photoshop.png",
    icon: "Ps",
  },
  {
    name: "Adobe Illustrator",
    category: "Vector",
    description: "Logos, icons, and scalable brand illustrations.",
    color: "#FF9A00",
    img: "/tools/adobe-illustrator.png",
    icon: "Ai",
  },
  {
    name: "Figma",
    category: "UI / UX",
    description: "Interface design, prototypes, and design systems.",
    color: "#A259FF",
    img: "/tools/figma.png",
    icon: "Fg",
  },
  {
    name: "Adobe InDesign",
    category: "Layout",
    description: "Brochures, magazines, and print-ready publications.",
    color: "#FF3366",
    img: "/tools/adobe-in-design.png",
    icon: "Id",
  },
  {
    name: "Adobe Lightroom",
    category: "Photo Editing",
    description: "Color correction, photo enhancement, and visual consistency.",
    color: "#31A8FF",
    img: "/tools/adobe-lightroom.webp",
    icon: "Lr",
  },
  {
    name: "Adobe XD",
    category: "UI / UX",
    description: "Wireframes, interactive prototypes, and user interface layouts.",
    color: "#FF61F6",
    img: "/tools/adobe-xd.webp",
    icon: "Xd",
  },
  {
    name: "Canva",
    category: "Quick Design",
    description: "Social templates and fast-turnaround creatives.",
    color: "#00C4CC",
    img: "/tools/canva.png",
    icon: "Cv",
  },
  {
    name: "CorelDRAW",
    category: "Vector",
    description: "Print layouts, signage, and vector production art.",
    color: "#00A651",
    img: "/tools/corelDRAW.png",
    icon: "Cd",
  },
] as const;

export const services = [
  {
    title: "Brand Identity Design",
    img: "/services/brand.png",
    description:
      "Custom logos, typography, color systems, and visual identities that create a strong brand presence.",
  },
  {
    title: "Social Media Creatives",
    img: "/services/social-media-creatives.png",
    description:
      "Modern posts, banners, stories, and promotional visuals designed for digital platforms.",
  },
  {
    title: "Print Design",
    img: "/services/print.png",
    description:
      "Flyers, brochures, posters, business cards, and packaging designs ready for print.",
  },
  {
    title: "Web & UI Design",
    img: "/services/web.png",
    description:
      "Clean website layouts, landing pages, and user interface designs with a modern visual style.",
  },
  {
    title: "Photo Editing & Manipulation",
    img: "/services/photo-editing.png",
    description:
      "Professional retouching, compositing, background editing, and creative photo enhancements.",
  },
  {
    title: "Motion Graphics",
    img: "/services/motion-graphics.png",
    description:
      "Creative motion visuals, animated content, and short-form video edits for digital media.",
  },
] as const;

export const projects = [
  {
    title: "Nova Coffee Rebrand",
    category: "Brand Identity",
    gradient:
      "from-[#ff0000] via-[#00ffcc] via-[#ffe600] to-[#240046]",
  },
  {
    title: "Pulse Fitness Campaign",
    category: "Social Media",
    gradient:
      "from-[#ffe600] via-[#ff00ff] via-[#00f5ff] to-[#001d3d]",
  },
  {
    title: "Lumen Tech UI Kit",
    category: "UI / UX",
    gradient:
      "from-[#00c2ff] via-[#ff7b00] via-[#7bff00] to-[#2b2d42]",
  },
  {
    title: "Bloom Skincare Packaging",
    category: "Packaging",
    gradient:
      "from-[#00ff88] via-[#ff0055] via-[#ffd60a] to-[#1b1b1b]",
  },
  {
    title: "Urban Beats Festival",
    category: "Print & Poster",
    gradient:
      "from-[#8d00ff] via-[#00ffd5] via-[#ff006e] to-[#111827]",
  },
  {
    title: "Artisan Bakery Menu",
    category: "Print Design",
    gradient:
      "from-[#ffb703] via-[#3a86ff] via-[#fb5607] to-[#1a1a1a]",
  },
] as const;

export const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "4+", label: "Months Experience" },
  { value: "10+", label: "Happy Clients" },
] as const;

export const contact = {
  email: "midhun455674@gmail.com",
  location: "Kerala, India",
  availability: "Open for freelance & full-time",
} as const;
