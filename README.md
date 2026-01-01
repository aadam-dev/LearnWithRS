# Learn With RS - Educational Website

A professional educational website for Learn With RS, an online learning platform offering courses in English Language, Arabic Language, Psychology, Islamic Studies, and Qur'an with Tajweed.

## Features

- Responsive Design: Fully optimized for mobile and desktop devices
- Modern UI/UX: Clean, professional design with intuitive navigation
- Complete Course Catalog: Detailed pages for all 5 courses
- Google Form Integration: Registration form embedded from Google Forms
- WhatsApp Integration: Contact and partnership forms use WhatsApp click-to-chat
- Component-Based Architecture: Reusable header and footer components
- Legal Pages: Privacy Policy and Terms of Service included
- FAQ Section: Comprehensive answers to common questions
- SEO Optimized: Meta tags and semantic HTML structure
- Accessible: Clear typography, good contrast, and readable fonts

## Project Structure

```
Learn with RS/
├── index.html                    # Home page
├── about.html                    # About Us page
├── courses.html                  # Courses catalog
├── course-english.html           # English Language course page
├── course-arabic.html            # Arabic Language course page
├── course-psychology.html        # Psychology course page
├── course-islamic-studies.html   # Islamic Studies course page
├── course-quran-tajweed.html     # Qur'an with Tajweed course page
├── register.html                 # Registration page (Google Form embedded)
├── contact.html                  # Contact page
├── faq.html                      # FAQ page
├── resources.html                 # Resources & Community page
├── privacy-policy.html           # Privacy Policy
├── terms-of-service.html         # Terms of Service
├── components/
│   ├── header.html               # Reusable navigation component
│   └── footer.html               # Reusable footer component
├── css/
│   └── style.css                 # Main stylesheet
├── js/
│   ├── components.js             # Component loader
│   └── main.js                   # JavaScript for interactivity
└── README.md                     # This file
```

## Getting Started

### Local Development

1. Clone or download this repository to your local machine

2. Open the website:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. Access the website:
   - Open your browser and navigate to `http://localhost:8000`

Note: The component system uses JavaScript fetch API, so you'll need to run a local server (not just open the file directly) for components to load properly.

### Deployment

#### Option 1: Static Hosting (Recommended)
The website is a static site and can be deployed to:
- Netlify: Drag and drop the folder or connect via Git
- Vercel: Connect your repository
- GitHub Pages: Push to a repository and enable Pages
- AWS S3 + CloudFront: Upload files to S3 bucket
- Any web hosting service: Upload all files via FTP

#### Option 2: Traditional Web Hosting
1. Upload all files to your web server's public directory (usually `public_html` or `www`)
2. Ensure `index.html` is in the root directory
3. The website should be accessible immediately

## Form Integration

### Registration Form
The registration form uses an embedded Google Form. To update it:
1. Edit the iframe source in `register.html`
2. Replace the Google Form URL with your own form URL

### Contact and Partnership Forms
These forms use WhatsApp click-to-chat integration:
- On form submission, WhatsApp opens with a pre-filled message
- Users click send to complete the submission
- WhatsApp number is configured in `js/main.js`

To change the WhatsApp number, update the `whatsappNumber` variable in the form submission functions in `js/main.js`.

## Customization

### Updating Contact Information

1. Email: Update in `components/footer.html` and contact pages
2. Phone/WhatsApp: Update in `components/footer.html` and `js/main.js`
3. Social Media: Update links in `components/footer.html`

### Changing Colors

Edit `css/style.css` and modify the CSS variables in the `:root` section:
```css
:root {
    --primary-teal: #2D9CDB;
    --mustard: #F4A261;
    /* ... other colors */
}
```

### Updating Header and Footer

Since the site uses a component-based architecture:
- Update `components/header.html` to change navigation across all pages
- Update `components/footer.html` to change footer across all pages
- Changes automatically apply to all pages

### Adding Content

- Courses: Edit individual course pages (`course-*.html`)
- About Us: Edit `about.html`
- FAQ: Add/remove questions in `faq.html`
- Resources: Update `resources.html` with new content
- Legal Pages: Update `privacy-policy.html` and `terms-of-service.html` as needed

## Technical Details

- HTML5: Semantic markup
- CSS3: Modern CSS with Flexbox and Grid, CSS variables
- JavaScript: Vanilla JS (no dependencies)
- Fonts: Google Fonts (Playfair Display, Source Sans Pro)
- Icons: Font Awesome 6.4.0
- Component System: JavaScript-based component loading using Fetch API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

The website includes:
- Meta descriptions on all pages
- Semantic HTML structure
- Proper heading hierarchy
- Clean, descriptive URLs
- Privacy Policy and Terms of Service for legal compliance

### Adding Google Analytics

Add this code before the closing `</head>` tag in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Component System

The site uses a JavaScript-based component system for header and footer:

- Components are stored in `components/` directory
- `js/components.js` loads components dynamically
- Active navigation states are set automatically
- Mobile menu functionality is initialized after component load

To update navigation or footer, edit the component files once and changes apply site-wide.

## Legal Compliance

The website includes:
- Privacy Policy page detailing data collection and usage
- Terms of Service page with user agreements
- Legal links in footer on all pages
- GDPR-friendly privacy practices

## Support & Updates

### Future Enhancements
- Add actual images/photos
- Integrate payment processing
- Add blog functionality
- Implement student portal
- Add tutor profiles
- Include testimonials with photos
- Email integration for form submissions

## License

This website is created for Learn With RS. All rights reserved.

## Credits

- Fonts: Playfair Display and Source Sans Pro by Google Fonts
- Icons: Font Awesome
- Design: Custom design for Learn With RS
- Development: Built with modern web standards

## Contact

For questions about the website or to request updates:
- Email: learnwithrs@gmail.com
- Phone/WhatsApp: +233 54 545 2326

Website developed by aadam (aadamsays@gmail.com)

---

Learn With RS - Where education meets purpose and growth

Grow Everyday
