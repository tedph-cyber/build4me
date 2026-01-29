# Architecture Portfolio with Antigravity Effect

A stunning Next.js portfolio showcasing architectural projects with smooth antigravity scroll animations.

## Features

- ✨ **Antigravity Scroll Effect** - Projects float and move with parallax as you scroll
- 🎨 **Minimalist Design** - Clean, architectural aesthetic with bold typography
- 🌊 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🖼️ **Image Placeholders** - Easy to replace with your own project images
- ⚡ **Next.js 15** - Built with the latest Next.js features

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customizing the Portfolio

### Adding Your Projects

Edit the `projects` array in `app/page.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    location: "City, Country",
    year: "2024",
    description: "Your project description here...",
    image: "/path/to/your/image.jpg", // Replace with your image
    category: "Residential" // or "Commercial", "Cultural", etc.
  },
  // Add more projects...
];
```

### Replacing Placeholder Images

The portfolio currently uses Unsplash placeholder images. To add your own:

1. Create a `public/images` folder in your project root
2. Add your project images to this folder
3. Update the image paths in the projects array:

```typescript
image: "/images/your-project-image.jpg"
```

### Recommended Image Sizes

- **Aspect Ratio**: 4:3 (1600x1200px recommended)
- **Format**: JPG or WebP for best performance
- **File Size**: Keep under 500KB for optimal loading

### Customizing Colors

The portfolio uses a minimalist black and white theme. To customize:

Edit colors in `app/page.tsx`:
- Background: `bg-black` → change to your color
- Text: `text-white`, `text-zinc-400` → adjust as needed
- Borders: `border-zinc-700` → modify for different accents

### Adjusting Animations

The antigravity effect is controlled by these values in `ProjectCard`:

```typescript
// Vertical movement range
const yOffset = index % 2 === 0 ? [100, -100] : [-50, 50];

// Rotation range (in degrees)
const rotateOffset = index % 2 === 0 ? [2, -2] : [-2, 2];

// Scale range
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
```

Adjust these values to make animations more or less dramatic.

### Changing Fonts

The portfolio uses:
- **Cormorant Garamond** for headings (elegant serif)
- **Inter** for body text (clean sans-serif)

To change fonts, edit `app/layout.tsx`:

```typescript
import { YourFont, AnotherFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-your-font",
});
```

### Contact Information

Update the footer in `app/page.tsx`:

```typescript
<div className="space-y-2 text-zinc-400">
  <p>your-email@example.com</p>
  <p>+234 XXX XXXX XXX</p>
</div>
```

## Understanding the Antigravity Effect

The antigravity effect works through several techniques:

1. **Scroll-Based Transforms**: Uses `useScroll` from Framer Motion to track scroll position
2. **Parallax Movement**: Different cards move at different speeds based on their index
3. **Spring Physics**: Smooth, natural motion using spring animations
4. **3D Mouse Tracking**: Cards tilt based on mouse position when hovered
5. **Staggered Animations**: Content reveals progressively as you scroll

## Project Structure

```
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles
├── public/
│   └── images/           # Your project images (create this)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Images automatically lazy load as you scroll
3. **Reduce Motion**: Consider adding a reduced motion option for accessibility

## Deployment

Deploy easily on Vercel:

```bash
npm run build
```

Then push to your GitHub repo and connect to Vercel.

## Tips for Best Results

1. **Use High-Quality Images**: Architectural photography works best
2. **Consistent Aspect Ratios**: Keep all images the same ratio
3. **Write Compelling Descriptions**: 1-2 sentences per project
4. **Show Variety**: Mix different project types and scales
5. **Professional Photos**: Use renders, professional shots, or good photography

## License

MIT - Feel free to use this for your portfolio!

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)
