# Understanding the Antigravity Effect

## What is the Antigravity Effect?

The antigravity effect makes your portfolio projects appear to **float and move** as visitors scroll through the page. It creates a dynamic, three-dimensional feel where different elements move at different speeds and directions, defying gravity.

## How It Works

The effect combines several animation techniques:

### 1. **Parallax Scrolling**
Projects move at different speeds as you scroll:
- Some projects move **up** as you scroll down
- Others move **down** or stay relatively still
- This creates **depth** and a floating sensation

### 2. **Rotation on Scroll**
Each project **gently rotates** as it enters and leaves the viewport:
- Creates a subtle 3D effect
- Alternates direction (clockwise/counterclockwise) for variety

### 3. **Scale Transformation**
Projects **grow and shrink** slightly as you scroll:
- Start smaller (0.8 scale)
- Grow to full size (1.0 scale) in the middle
- Shrink again as they leave

### 4. **3D Mouse Tracking**
When you hover over a project:
- The card **tilts** based on your mouse position
- Creates an interactive 3D perspective
- Responds in real-time to mouse movement

### 5. **Spring Physics**
All movements use **spring animations**:
- Smooth, natural motion
- Feels like real objects floating in space
- No robotic, linear movements

## Visual Breakdown

```
Project 1 (moves UP as you scroll down)
   ↑ Parallax: 100 → -100
   ⟲ Rotate: 2° → -2°
   ◐ Scale: 0.8 → 1.0 → 0.8

Project 2 (moves DOWN as you scroll down)
   ↓ Parallax: -50 → 50
   ⟳ Rotate: -2° → 2°
   ◐ Scale: 0.8 → 1.0 → 0.8

Project 3 (moves UP again, alternating)
   ... and so on
```

## Customizing the Effect

### Making It More Dramatic

In `app/page.tsx`, find the `ProjectCard` component and adjust these values:

```typescript
// BEFORE (subtle movement)
const yOffset = index % 2 === 0 ? [100, -100] : [-50, 50];
const rotateOffset = index % 2 === 0 ? [2, -2] : [-2, 2];

// AFTER (dramatic movement)
const yOffset = index % 2 === 0 ? [200, -200] : [-150, 150];
const rotateOffset = index % 2 === 0 ? [5, -5] : [-5, 5];
```

### Making It More Subtle

```typescript
// For a gentler, more professional feel
const yOffset = index % 2 === 0 ? [50, -50] : [-30, 30];
const rotateOffset = index % 2 === 0 ? [1, -1] : [-1, 1];
```

### Adjusting Spring Physics

Find the `springConfig`:

```typescript
// BEFORE (smooth and fluid)
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

// AFTER (snappier, more responsive)
const springConfig = { stiffness: 200, damping: 20, restDelta: 0.001 };

// OR (slower, more dreamy)
const springConfig = { stiffness: 50, damping: 40, restDelta: 0.001 };
```

**What these mean:**
- **stiffness**: How quickly the animation responds (higher = faster)
- **damping**: How much "resistance" there is (higher = less bouncy)
- **restDelta**: When to stop animating (keep this at 0.001)

### Changing the Scale Effect

```typescript
// BEFORE (projects shrink and grow)
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

// AFTER (always full size, no scaling)
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]);

// OR (more dramatic scaling)
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.6]);
```

### Adjusting Mouse Tilt Sensitivity

Find the `handleMouseMove` function:

```typescript
// BEFORE (subtle tilt)
const x = (e.clientX - rect.left - rect.width / 2) / 20;
const y = (e.clientY - rect.top - rect.height / 2) / 20;

// AFTER (more dramatic tilt)
const x = (e.clientX - rect.left - rect.width / 2) / 10; // ← Smaller divisor = more tilt
const y = (e.clientY - rect.top - rect.height / 2) / 10;

// OR (very subtle tilt)
const x = (e.clientX - rect.left - rect.width / 2) / 40;
const y = (e.clientY - rect.top - rect.height / 2) / 40;
```

## Pro Tips for Best Effect

### 1. **Don't Overdo It**
- The default settings are balanced for professional use
- Too much movement can be distracting
- Test with actual users to find the sweet spot

### 2. **Match Your Content**
- **More projects** (8+) → Use **subtle** effects to avoid chaos
- **Fewer projects** (3-5) → Can use **dramatic** effects

### 3. **Consider Your Audience**
- **Architecture firms** → Keep it professional (subtle)
- **Creative portfolios** → Can be more playful (dramatic)
- **Academic submissions** → Very subtle or minimal

### 4. **Test Performance**
On slower devices or with many projects:
```typescript
// Disable spring physics for better performance
const smoothY = y; // Instead of: useSpring(y, springConfig)
const smoothRotate = rotate;
const smoothScale = scale;
```

### 5. **Accessibility Option**
Consider adding a "reduce motion" option:

```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const yOffset = prefersReducedMotion 
  ? [0, 0] // No movement
  : index % 2 === 0 ? [100, -100] : [-50, 50];
```

## Common Questions

**Q: Why do some projects move up and others down?**
A: The alternating pattern (based on `index % 2`) creates visual variety and prevents the page from feeling repetitive.

**Q: Can I make all projects move in the same direction?**
A: Yes! Remove the alternating logic:
```typescript
const yOffset = [100, -100]; // All move the same way
```

**Q: The effect is too subtle on my monitor. Why?**
A: Screen size affects perception. Increase the values if needed, but test on multiple devices.

**Q: Can I disable specific parts of the effect?**
A: Absolutely! Comment out any transforms you don't want:
```typescript
style={{
  y: smoothY,
  // rotate: smoothRotate, // ← Disabled
  scale: smoothScale,
}}
```

## Inspiration for Variations

### Variation 1: Wave Pattern
```typescript
const yOffset = Math.sin(index) * 100; // Creates a wave
```

### Variation 2: Random Movement
```typescript
const yOffset = [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200];
```

### Variation 3: Progressive Movement
```typescript
const yOffset = [index * 20, -index * 20]; // Increases with each project
```

## Testing Your Changes

1. Save your changes to `app/page.tsx`
2. The page will auto-reload in your browser
3. Scroll up and down to see the effect
4. Try hovering over projects
5. Test on mobile (the effect automatically adapts)

## Need More Help?

The antigravity effect is powered by:
- **Framer Motion**: For animations
- **useScroll hook**: Tracks scroll position
- **useTransform hook**: Converts scroll to movement

Check out Framer Motion docs for more advanced effects:
https://www.framer.com/motion/

Happy animating! 🚀
