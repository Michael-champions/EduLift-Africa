# EduLift Africa - Design & Brand Guide

## Brand Philosophy

**Mission:** Create a website that feels warm, trustworthy, and human-centered while maintaining genuine honesty about the organization's early-stage status and real-world impact.

**Core Values:**
- ❤️ Authenticity - No exaggeration, real stories
- 🤝 Trust - Professional yet approachable
- 🌍 Compassion - Human-centered design
- ✨ Clarity - Clear messaging and navigation

---

## Color Palette

### Primary Colors

| Color | Code | Usage | Emotion |
|-------|------|-------|---------|
| Professional Blue | `#4a90e2` | Headers, CTAs, links | Trust, reliability |
| Soft White | `#fafafa` | Background sections | Clean, spacious |
| Light Blue | `#e8f4f8` | Card backgrounds, accents | Calm, approachable |
| Warm Accent | `#f4a261` | Highlights, "Get Involved" section | Warmth, hope |

### Supporting Colors

| Color | Code | Usage |
|-------|------|-------|
| Dark Text | `#2c3e50` | Body text, headings |
| Light Text | `#7f8c8d` | Secondary text, descriptions |
| Border Light | `#e0e6ed` | Dividers, subtle borders |
| Success Green | `#27ae60` | Form success states |

---

## Typography

### Font Family
**Primary:** System font stack (best performance)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Font Sizes & Hierarchy

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| Hero Headline | 48px | 700 | Main page title |
| Section Heading | 40px | 700 | Major sections |
| Card Title | 24px | 600 | Card headers |
| Body Text | 18px | 400 | Main content |
| Secondary Text | 16px | 400 | Descriptions |
| Small Text | 14px | 400 | Footer, meta |

### Line Heights
- Headings: 1.2 (tight, impactful)
- Body text: 1.6-1.8 (readable, breathable)
- Form inputs: 1.5 (comfortable)

---

## Component Styles

### Buttons

**Primary Button (Call-to-Action)**
```
Background: #4a90e2
Color: White
Padding: 14px 32px
Border Radius: 8px
Font Weight: 600
Hover Effect: Darker shade + lift effect (translateY -2px)
Box Shadow: 0 8px 20px rgba(74, 144, 226, 0.3)
```

**Secondary Button (Options)**
```
Background: #e8f4f8
Color: #4a90e2
Border: 2px solid #4a90e2
Padding: 14px 32px
Border Radius: 8px
Font Weight: 600
Hover: Inverts to primary style
```

### Cards

**Service/Feature Cards**
```
Background: White
Padding: 40px
Border Radius: 12px
Box Shadow: 0 5px 20px rgba(0, 0, 0, 0.08)
Hover Effect: Lift up (translateY -8px) + enhanced shadow
Left Border: 4px solid #f4a261 (mission/vision cards)
```

### Forms

**Input Fields**
```
Padding: 15px
Border: 2px solid #e0e6ed
Border Radius: 8px
Font Size: 16px
Focus State: Border changes to #4a90e2
Focus Shadow: 0 0 0 3px rgba(74, 144, 226, 0.1)
Transition: 0.3s smooth
```

---

## Spacing & Layout

### Padding/Margins
- Section padding: 80px (desktop), 50px (mobile)
- Container margin: 0 auto, max-width 1200px
- Card padding: 40px (desktop), 30px (mobile)
- Content gap: 30-60px between major sections

### Responsive Breakpoints
- Desktop: 1200px+ (1-2 column layouts)
- Tablet: 768-1199px (flexible grids)
- Mobile: <768px (stacked, single column)

---

## Visual Effects & Animations

### Transitions
- Default: 0.3s ease
- Button hover: 0.3s ease (color + transform)
- Form inputs: 0.3s ease (focus state)

### Animations
- Fade-in on page load: 0.6s ease
- Scroll reveal: Fade-in + slide-up when entering viewport
- Button ripple: 0.6s ease-out (on click)

### Hover Effects
- Buttons: Translate up 2px + enhanced shadow
- Cards: Translate up 5-8px + enhanced shadow
- Links: Color change (#4a90e2 → #f4a261)

---

## Imagery Guidelines

### Photography Style
✅ **Do:**
- Use authentic, real photographs of children and education
- Show genuine moments and interactions
- Use natural lighting
- Include diverse representations
- Show emotion and connection

❌ **Don't:**
- Use overly staged or fake stock photos
- Use images that feel artificial or corporate
- Use low-resolution or blurry images
- Avoid imagery that looks clichéd or stereotypical

### Image Specifications

**Hero Image**
- Dimensions: 600x600px (square)
- Format: JPG (compressed)
- File size: <150KB
- Description: Children learning, uniforms, education setting
- Placement: Right side of hero section

**Founder Image**
- Dimensions: 500x600px (portrait)
- Format: JPG (compressed)
- File size: <150KB
- Description: Professional portrait with warmth
- Placement: Right side of founder section

---

## Message Tone & Voice

### Tone Characteristics
- **Genuine** - Honest, not corporate-sounding
- **Warm** - Compassionate, human-centered
- **Humble** - Realistic about capabilities
- **Clear** - Direct and easy to understand
- **Inspiring** - Motivating without being exaggerated

### Language Patterns

✅ **Good Examples:**
- "We are currently in our pilot phase..."
- "Your support helps remove these barriers..."
- "Starting small and growing step by step..."
- "Every contribution helps us reach more children..."

❌ **Avoid:**
- "We've helped thousands..." (if not true)
- "Transform lives forever..." (overpromising)
- "Join our world-changing movement..." (too grandiose)
- "Limited time offer" (pressuring)

---

## Accessibility Standards

### Color Contrast
- Text on background: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Focus indicators: Visible and clear

### Keyboard Navigation
- All interactive elements: Keyboard accessible
- Tab order: Logical and intuitive
- Focus states: Always visible

### Screen Readers
- Semantic HTML used throughout
- Alt text on all images
- Form labels properly associated
- ARIA landmarks where needed

### Motion & Animation
- Respects `prefers-reduced-motion` setting
- No auto-playing videos or animations
- User-triggered animations only

---

## Content Guidelines

### Headings
- Use H1 for page title only
- Use H2 for major sections
- Use H3-H4 for subsections
- Keep headings descriptive and scannable

### Body Text
- Aim for line length of 50-75 characters
- Break long paragraphs into shorter ones (3-4 sentences max)
- Use subheadings to organize content
- Bold important terms

### CTAs
- Use active, action-oriented language
- Be specific about outcomes ("Help Provide a School Uniform Today")
- Use first-person perspective when appropriate
- Include emoji sparingly for warmth (max 1-2 per section)

---

## Browser Compatibility

✅ **Fully Supported:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS, Android)

💡 **Tested & Optimized:**
- Smooth scrolling
- CSS Grid & Flexbox
- Modern CSS features
- No legacy IE support

---

## Performance Targets

- **Page Load:** < 3 seconds
- **Time to Interactive:** < 4 seconds
- **Lighthouse Score:** > 90
- **Mobile Performance:** Smooth 60fps

---

## Future Enhancement Ideas

1. **Visual Elements**
   - Add subtle background patterns
   - Implement gradient overlays
   - Add icon illustrations

2. **Interactive Features**
   - Animated counters for metrics
   - Image carousels
   - Video embeds
   - Interactive testimonials

3. **Advanced Design**
   - Dark mode toggle
   - Custom animations
   - Micro-interactions
   - Loading states

---

## Design Files & Resources

### Tools Used
- HTML5 (semantic markup)
- CSS3 (modern, optimized)
- Vanilla JavaScript (no heavy libraries)
- No design software needed (flat files)

### Editing Tips
- Use VS Code or any text editor
- Keep consistent indentation (2-4 spaces)
- Comment code for clarity
- Test changes in multiple browsers

---

**Design Philosophy:** 
*Beautiful simplicity with genuine warmth, creating trust through authenticity and clarity.*

---

Last updated: May 2026
