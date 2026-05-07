# EduLift Africa - Implementation Guide

## Quick Start

1. **Open the website:**
   - Open `index.html` in your web browser
   - Or use a local server (see below)

2. **Add your images:**
   - Place `hero-image.jpg` in `assets/` folder (600x600px recommended)
   - Place `founder-image.jpg` in `assets/` folder (500x600px recommended)

3. **Test on mobile:**
   - The website is fully responsive
   - Test on your phone to see how it looks

## Local Server Setup

### Option 1: Python (Easiest)
```bash
cd EduLiftafrica
python -m http.server 8000
# Visit: http://localhost:8000
```

### Option 2: Node.js
```bash
npx http-server
# Visit: http://localhost:8080
```

### Option 3: VS Code Live Server Extension
- Install "Live Server" extension in VS Code
- Right-click `index.html` → "Open with Live Server"

## Deployment Options

### Option 1: GitHub Pages (Free, Easiest)
1. Create a GitHub repository
2. Push all files to the `main` branch
3. Go to Settings → Pages → Select "main branch"
4. Your site will be live at `https://yourusername.github.io/EduLiftafrica`

### Option 2: Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the `EduLiftafrica` folder
4. Your site will be live instantly with a unique URL

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → Upload folder
3. Vercel will automatically deploy your site

### Option 4: Custom Domain (Any Host)
1. Buy a domain (GoDaddy, Namecheap, etc.)
2. Upload files to your hosting provider via FTP/SFTP
3. Point domain to hosting provider's nameservers
4. Your site will be live at your custom domain

## Image Integration Tips

### Finding Good Images
- **Free sources:**
  - Unsplash (unsplash.com) - High quality
  - Pexels (pexels.com) - Creative commons
  - Pixabay (pixabay.com) - Diverse collection
  
- **Search terms:**
  - "African children learning"
  - "School uniforms"
  - "Education in Africa"
  - "Children with backpacks"

### Image Optimization
```bash
# Resize images to appropriate dimensions:
# Hero image: 600x600px
# Founder image: 500x600px

# Compress for web:
# Use tools like TinyPNG or ImageOptim
# Keep file size under 200KB for optimal loading
```

## Customization Guide

### Change Text Content
Edit `index.html` directly in any text editor. Key sections:
- **Line 22-25:** Hero section headline and subtext
- **Line 37-42:** Why EduLift Started story
- **Line 51-60:** Mission and vision statements
- **Line 68-83:** What We Do services
- **Line 139-152:** Founder information

### Change Colors
Edit CSS variables in `style.css` (lines 2-11):
```css
--primary-color: #4a90e2;      /* Change main blue */
--warm-accent: #f4a261;        /* Change orange tone */
--light-blue: #e8f4f8;         /* Change light blue */
```

### Make Contact Form Functional

Currently, the form shows a success message locally. To actually send emails:

**Option A: Using Formspree (No coding needed)**
1. Go to formspree.io
2. Create a new form
3. In `index.html`, line 142, update form action:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_CODE" method="POST">
   ```

**Option B: Using EmailJS (JavaScript)**
1. Sign up at emailjs.com
2. Add EmailJS script to `index.html`
3. Update `script.js` with your EmailJS credentials

## SEO & Analytics Setup

### Add Google Analytics
Add this before `</head>` in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

### Add Meta Tags for Better SEO
Already included in `index.html`, but you can enhance:
```html
<meta name="description" content="EduLift Africa supports underprivileged children with school uniforms and sandals.">
<meta name="keywords" content="education, Africa, charity, uniforms, children">
<meta property="og:title" content="EduLift Africa">
<meta property="og:description" content="Giving every child the confidence to learn">
<meta property="og:image" content="assets/hero-image.jpg">
```

## Performance Tips

✅ **Already Optimized:**
- Clean, minimal CSS (no heavy frameworks)
- No jQuery or heavy dependencies
- Fast JavaScript
- Mobile-first design

💡 **Further Optimization:**
1. Compress images (target < 200KB each)
2. Use WebP format for images (with fallbacks)
3. Enable browser caching on your server
4. Consider using a CDN for faster loading

## Mobile Testing

The website is fully responsive. Test on:
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad, Android tablets)
- Desktop (Chrome, Firefox, Safari)

## Troubleshooting

### Images not showing?
1. Check file names match exactly: `hero-image.jpg`, `founder-image.jpg`
2. Make sure images are in the `assets/` folder
3. Check browser console (F12) for errors

### Form not working?
1. Fill in all fields and click "Send Message"
2. You should see a success message
3. To make it send emails, follow the contact form setup above

### Website looks wrong?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Try a different browser
3. Check that `style.css` is in the same folder as `index.html`

### Mobile layout issues?
1. Zoom out in browser (Ctrl+Minus)
2. Check viewport is set correctly in `index.html`
3. Test in mobile device browser directly

## Next Steps

1. ✅ Add your images
2. ✅ Customize text/content
3. ✅ Test on mobile devices
4. ✅ Set up contact form integration
5. ✅ Deploy to a hosting service
6. ✅ Set up a custom domain
7. ✅ Add Google Analytics
8. ✅ Share with supporters!

## Support

For questions or issues:
- Check the README.md file
- Review the code comments in HTML/CSS/JS files
- Consult the browser console (F12) for errors

---

**Website Status:** Ready to Deploy! 🚀
