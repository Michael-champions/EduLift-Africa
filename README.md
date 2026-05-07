# EduLift Africa Website

A clean, modern, and emotionally compelling website for the EduLift Africa non-profit initiative.

## Project Overview

EduLift Africa supports underprivileged children in Africa by providing essential school items such as school sandals and uniforms. This website is designed with warmth, trust, and human-centered values.

## Features

✨ **Modern Design**
- Clean, minimal layout with professional styling
- Soft color palette: white, light blue, and warm tones
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling and interactive elements

❤️ **Emotional Storytelling**
- Founder's personal story
- Clear mission and vision
- Impact-focused messaging (honest, no exaggeration)
- Call-to-action buttons for engagement

🎨 **User Experience**
- Sticky navigation for easy access
- Smooth animations and transitions
- Contact form with validation
- Accessibility-friendly (keyboard navigation, reduced motion support)

## File Structure

```
EduLiftafrica/
├── index.html          # Main website file
├── style.css           # Styling with color palette
├── script.js           # Interactive features
├── assets/             # Images folder (see below)
│   ├── hero-image.jpg
│   └── founder-image.jpg
└── README.md           # This file
```

## Images Needed

Place the following images in the `assets/` folder:

### 1. **hero-image.jpg** (Required)
- Main hero section image
- **Recommended dimensions:** 600x600px or larger
- **Description:** Natural image of children in school settings or uniforms
- **Style:** Real, authentic photo (avoid stock imagery)
- **Alt text:** "Children in school uniforms"

### 2. **founder-image.jpg** (Required)
- Founder portrait in the founder section
- **Recommended dimensions:** 500x600px or larger
- **Description:** Professional portrait of Michael Attah
- **Style:** Professional yet warm and approachable
- **Alt text:** "Michael Attah, Founder"

## How to Use

### 1. Clone/Download the Project
```bash
cd EduLiftafrica
```

### 2. Add Images
- Place `hero-image.jpg` and `founder-image.jpg` in the `assets/` folder

### 3. Open in Browser
- Simply open `index.html` in any modern web browser
- Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #4a90e2;      /* Main blue */
    --light-blue: #e8f4f8;         /* Soft blue */
    --warm-accent: #f4a261;        /* Warm orange */
    --soft-white: #fafafa;         /* Off-white */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #7f8c8d;         /* Light text */
}
```

### Content
Edit text in `index.html` sections:
- Hero section: Lines 22-25
- Why Started: Lines 37-42
- Mission/Vision: Lines 51-60
- Services: Lines 68-83
- Contact: Lines 143-153

### Contact Form
The contact form currently shows a success message. To make it functional:
1. Set up a backend service (e.g., Formspree, EmailJS, or custom API)
2. Update the form submission handler in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Principles

✅ **Authentic & Honest**
- No fake impact numbers or exaggerated claims
- Emphasis on pilot phase and small-scale impact
- Real, relatable storytelling

✅ **Warm & Trustworthy**
- Soft, professional color palette
- Clear typography and spacing
- Human-centered language

✅ **Accessible & Inclusive**
- Semantic HTML
- Keyboard navigation support
- ARIA-friendly elements
- Reduced motion support

## Sections Included

1. **Navigation** - Sticky header with smooth scrolling
2. **Hero** - Eye-catching headline and CTA
3. **Why EduLift Started** - Founder's personal story
4. **Mission & Vision** - Clear organizational goals
5. **What We Do** - Three core services with icons
6. **Our Journey** - Pilot phase messaging
7. **Why This Matters** - Impact explanation
8. **Get Involved** - Action buttons (Support, Partner, Volunteer)
9. **Founder Info** - Michael Attah's background
10. **Contact** - Email, location, and contact form
11. **Footer** - Copyright and mission statement

## Future Enhancements

- [ ] Donation integration (Stripe, PayPal)
- [ ] Blog/Stories section
- [ ] Photo gallery of impact
- [ ] Email newsletter signup
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Impact tracker/dashboard

## License

This website is created for EduLift Africa. All rights reserved.

## Contact

**Michael Attah**
- Email: hello@eduliftafrica.org
- Location: Lagos, Nigeria
- Role: Founder, BYU-Pathway Student

---

Built with ❤️ for every child's education.
