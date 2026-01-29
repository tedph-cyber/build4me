# How to Add Your Building Images

## Quick Start Guide

### Step 1: Prepare Your Images

1. **Collect your building photos** from each project
2. **Rename them** with clear names like:
   - `urban-residency-1.jpg`
   - `commercial-hub-2.jpg`
   - `cultural-center-3.jpg`

3. **Optimize them** (recommended but optional):
   - Use tools like TinyPNG or Squoosh
   - Target size: 1600x1200px (4:3 ratio)
   - Keep file size under 500KB

### Step 2: Add Images to Your Project

Create an `images` folder in the `public` directory:

```
your-project/
├── public/
│   └── images/
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
```

### Step 3: Update the Code

Open `app/page.tsx` and find the `projects` array. Update the image paths:

**Before (with placeholders):**
```typescript
{
  id: 1,
  title: "Urban Residency Complex",
  location: "Lagos, Nigeria",
  year: "2024",
  description: "A modern residential development...",
  image: "https://images.unsplash.com/photo-...", // ← Placeholder
  category: "Residential"
}
```

**After (with your images):**
```typescript
{
  id: 1,
  title: "Urban Residency Complex",
  location: "Lagos, Nigeria",
  year: "2024",
  description: "A modern residential development...",
  image: "/images/project1.jpg", // ← Your image
  category: "Residential"
}
```

### Step 4: Customize Project Details

For each project, update:

1. **title**: The project name
2. **location**: Where it's located
3. **year**: When it was completed
4. **description**: Brief 1-2 sentence description
5. **category**: Type of project (Residential, Commercial, Cultural, etc.)

### Example with Real Data

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "The Skyline Apartments",
    location: "Lagos, Nigeria",
    year: "2024",
    description: "A 12-story residential complex featuring sustainable design principles and panoramic city views.",
    image: "/images/skyline-apartments.jpg",
    category: "Residential"
  },
  {
    id: 2,
    title: "Tech Hub Plaza",
    location: "Abuja, Nigeria",
    year: "2023",
    description: "Modern office space with integrated co-working areas and smart building technology.",
    image: "/images/tech-hub.jpg",
    category: "Commercial"
  },
  // Add more projects as needed...
];
```

## Tips for Best Results

### Image Selection
- Use your **best angle** for each project
- Show the **most distinctive feature** of the building
- Mix **exterior and interior** shots if you have multiple projects
- Choose images with **good lighting**

### Writing Descriptions
- Keep it **brief** (1-2 sentences)
- Highlight the **key feature** or innovation
- Mention what makes this project **unique**
- Use **active language**

### Categories
Suggested categories:
- Residential
- Commercial
- Cultural
- Hospitality
- Educational
- Mixed-Use
- Religious
- Industrial
- Public

## Adding More or Fewer Projects

### To Add More Projects

Just add more objects to the array:

```typescript
const projects: Project[] = [
  {
    id: 1,
    // ... first project
  },
  {
    id: 2,
    // ... second project
  },
  {
    id: 3, // ← New project
    title: "New Project Name",
    location: "City, Country",
    year: "2024",
    description: "Description here...",
    image: "/images/new-project.jpg",
    category: "Commercial"
  },
];
```

### To Remove Projects

Simply delete the project objects you don't want. Just make sure to keep at least 3-4 projects for the best visual effect.

## Troubleshooting

### Images Not Showing?

1. **Check the path**: Make sure the image is in `public/images/`
2. **Check the filename**: Match exactly (case-sensitive)
3. **Refresh the page**: Sometimes you need a hard refresh (Ctrl+Shift+R)

### Images Look Stretched?

The portfolio expects 4:3 ratio images (landscape). If your images are different:
- Crop them to 4:3 ratio
- Or update the aspect ratio in the code (look for `aspect-[4/3]`)

### Images Load Slowly?

- Compress your images (under 500KB recommended)
- Use JPG format instead of PNG for photos
- Consider converting to WebP format for best compression

## Need Help?

Common issues and solutions:

**Q: Can I use different image sizes?**
A: Yes, but keep them consistent for best results. The code will automatically crop them to 4:3.

**Q: How many projects should I include?**
A: Aim for 5-8 projects to show range without overwhelming visitors.

**Q: Can I add videos?**
A: The current setup uses images only, but you could extend it to support videos with some modifications.

**Q: What if I don't have professional photos?**
A: Good phone photos work too! Just ensure good lighting and composition.

## Next Steps

Once you've added your images:

1. Run `npm run dev` to see your changes
2. Test on mobile devices
3. Share with friends for feedback
4. Deploy when ready!

Good luck with your portfolio! 🚀
