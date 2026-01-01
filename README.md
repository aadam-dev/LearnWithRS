# Learn With RS - Educational Website

A professional, modern, and user-friendly educational website for **Learn With RS**, an online learning platform offering courses in English Language, Arabic Language, Psychology, Islamic Studies, and Qur'an with Tajweed.

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile and desktop devices
- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **Complete Course Catalog**: Detailed pages for all 5 courses
- **Easy Registration**: Simple, hassle-free enrollment process
- **Contact Forms**: Multiple contact and inquiry forms
- **FAQ Section**: Comprehensive answers to common questions
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessible**: Clear typography, good contrast, and readable fonts

## 📁 Project Structure

```
Learn with RS/
├── index.html              # Home page
├── about.html              # About Us page
├── courses.html            # Courses catalog
├── course-english.html     # English Language course page
├── course-arabic.html      # Arabic Language course page
├── course-psychology.html  # Psychology course page
├── course-islamic-studies.html  # Islamic Studies course page
├── course-quran-tajweed.html   # Qur'an with Tajweed course page
├── register.html           # Registration/Enrollment page
├── contact.html            # Contact page
├── faq.html                # FAQ page
├── resources.html          # Resources & Community page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript for interactivity
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository to your local machine

2. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Access the website**:
   - Open your browser and navigate to `http://localhost:8000`

### Deployment

#### Option 1: Static Hosting (Recommended)
The website is a static site and can be deployed to:
- **Netlify**: Drag and drop the folder or connect via Git
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3 + CloudFront**: Upload files to S3 bucket
- **Any web hosting service**: Upload all files via FTP

#### Option 2: Traditional Web Hosting
1. Upload all files to your web server's public directory (usually `public_html` or `www`)
2. Ensure `index.html` is in the root directory
3. The website should be accessible immediately

## 🎨 Customization

### Updating Contact Information

1. **Email**: Update in `contact.html` (line with `info@learnwithrs.com`)
2. **Phone/WhatsApp**: Update in `contact.html` and replace `YOUR_NUMBER` in WhatsApp links
3. **Social Media**: Update social media links in all footer sections

### Changing Colors

Edit `css/style.css` and modify the CSS variables in the `:root` section:
```css
:root {
    --primary-teal: #2D9CDB;
    --mustard: #F4A261;
    /* ... other colors */
}
```

### Adding Content

- **Courses**: Edit individual course pages (`course-*.html`)
- **About Us**: Edit `about.html`
- **FAQ**: Add/remove questions in `faq.html`
- **Resources**: Update `resources.html` with new content

## 📝 Form Integration

Currently, forms use JavaScript for client-side validation and display success messages. To make forms functional:

### Option 1: Google Forms
1. Create a Google Form for each form type
2. Replace the `<form>` action with your Google Form URL
3. Update form field names to match Google Form fields

### Option 2: Form Backend Service
Integrate with services like:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to forms
- **Netlify Forms**: Add `netlify` attribute to forms
- **EmailJS**: Use EmailJS JavaScript SDK

### Option 3: Custom Backend
Set up a backend API endpoint and update form `action` attributes.

## 🔧 Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with Flexbox and Grid
- **JavaScript**: Vanilla JS (no dependencies)
- **Fonts**: Google Fonts (Inter)
- **Icons**: Emoji icons (can be replaced with icon fonts if needed)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Optimization

The website includes:
- Meta descriptions on all pages
- Semantic HTML structure
- Proper heading hierarchy
- Alt text ready for images (add when images are included)
- Clean, descriptive URLs

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

## 📞 Support & Updates

### Future Enhancements
- Add actual images/photos
- Integrate payment processing
- Add blog functionality
- Implement student portal
- Add tutor profiles
- Include testimonials with photos

## 📄 License

This website is created for Learn With RS. All rights reserved.

## 🙏 Credits

- **Font**: Inter by Google Fonts
- **Design**: Custom design for Learn With RS
- **Development**: Built with modern web standards

## 📧 Contact

For questions about the website or to request updates:
- Email: info@learnwithrs.com
- Website: [Your website URL]

---

**Learn With RS** - Where education meets purpose and growth

*Grow Everyday*

