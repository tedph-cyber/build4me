export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Urban Residency Complex",
    location: "Lagos, Nigeria",
    year: "2024",
    description: "A modern residential development featuring sustainable design principles and community-focused spaces.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    category: "Residential"
  },
  {
    id: 2,
    title: "Commercial Hub",
    location: "Abuja, Nigeria",
    year: "2023",
    description: "Mixed-use commercial space integrating retail, office, and public amenities in an innovative vertical design.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Commercial"
  },
  {
    id: 3,
    title: "Cultural Center",
    location: "Ibadan, Nigeria",
    year: "2024",
    description: "A contemporary cultural space celebrating local heritage through architectural form and material expression.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    category: "Cultural"
  },
  {
    id: 4,
    title: "Eco Resort",
    location: "Port Harcourt, Nigeria",
    year: "2023",
    description: "Sustainable hospitality design harmonizing with natural landscape and local environmental conditions.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Hospitality"
  },
  {
    id: 5,
    title: "Educational Institute",
    location: "Enugu, Nigeria",
    year: "2024",
    description: "Modern learning facility designed to inspire creativity and foster collaborative educational experiences.",
    image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&q=80",
    category: "Educational"
  },
  {
    id: 6,
    title: "Private Villa",
    location: "Lekki, Nigeria",
    year: "2023",
    description: "Luxury residential design blending contemporary aesthetics with tropical climate considerations.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Residential"
  }
];
