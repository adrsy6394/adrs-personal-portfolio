index.html file:-

# Adarsh Yadav - Frontend Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Frontend Developer. Built with clean HTML5, CSS3, and JavaScript with a focus on performance and user experience.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual deployment URL -->

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contact Form Setup](#contact-form-setup)
- [Customization](#customization)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Fully Responsive Design** - Works seamlessly on all devices and screen sizes
- **Dark/Light Theme Toggle** - User can switch between themes with animated transitions
- **Smooth Scrolling Navigation** - Elegant navigation with smooth scroll effects
- **Interactive Contact Form** - Functional contact form with EmailJS integration
- **Typing Animation** - Dynamic typing effect in hero section
- **Skills Progress Bars** - Animated skill level indicators with smooth animations
- **Project Filtering** - Filter projects by category (Web Dev, Mobile, UI/UX)
- **Social Media Integration** - Links to GitHub, LinkedIn, WhatsApp, and Email
- **Resume Download** - Direct PDF download functionality
- **Mobile-First Approach** - Optimized for mobile devices first
- **Fast Loading** - Optimized images and efficient code structure
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)** - Interactive functionality and smooth animations
- **Font Awesome** - Icons and visual elements

### Third-Party Services
- **EmailJS** - Contact form email functionality
- **Font Awesome CDN** - Icon library

### Tools & Workflow
- **Git** - Version control
- **GitHub** - Code repository and hosting
- **VS Code** - Development environment
- **Figma** - Design and prototyping

## 📄 Sections

### 1. Header/Navigation
- Responsive navigation menu with brand logo
- Theme toggle button with smooth transitions
- Mobile hamburger menu for smaller screens
- Smooth scroll navigation to all sections

### 2. Hero Section
- Personal introduction with animated typing effect
- Call-to-action buttons (View Portfolio, Contact Me)
- Social media links (Email, LinkedIn, GitHub)
- Professional profile image with circular design

### 3. About Section
- Professional summary and personal story
- Key statistics (10+ Projects, 3+ Years Experience, 100% Client Satisfaction)
- Hire Me and Download Resume buttons
- Profile image with floating tech icons (React, JavaScript, CSS, HTML)

### 4. Skills Section
- **Frontend Development Skills:**
  - HTML5 (95%)
  - CSS3/SCSS (90%)
  - JavaScript (88%)
  - React.js (85%)
  - Tailwind CSS (80%)

- **Code Editor & AI Tools:**
  - VS Code (75%)
  - Figma (70%)
  - Git & GitHub (80%)
  - ChatGPT (85%)
  - Lovable AI (65%)

- **Tech Stack Icons:** HTML5, CSS3, JavaScript, React, ChatGPT, GitHub, Figma, Tailwind CSS

### 5. Projects Section
- Featured project: **AI Chatbot**
  - Full-responsive frontend development
  - Built with React, Tailwind CSS, and REST APIs
  - Features user questions, recent history, dark/light mode
  - Live demo and GitHub repository links
- Project filtering system (All Projects, Web Dev, Mobile, UI/UX)
- Load More Projects functionality

### 6. Resume Section
- **Education Timeline:**
  - Bachelor of Computer Applications (2023-2026) - ITM College of Management, Gorakhpur
  - Higher Secondary School (2021-2023) - Samta IC College, Kushinagar
- **Core Competencies:**
  - Frontend: HTML5, CSS3, JavaScript, React, Tailwind
  - AI Tools: ChatGPT, Lovable AI, Claude AI
  - Tools: Git, GitHub, Figma, VS Code, NPM
  - Soft Skills: Problem Solving, Team Leadership, Communication
- Resume download functionality

### 7. Contact Section
- **Contact Information:**
  - Email: adarshyadav95115@gmail.com
  - Phone: +91 6394722388
  - Location: Gorakhpur, Uttar Pradesh, India
- **Interactive Contact Form** with fields:
  - Full Name, Email Address, Subject, Message
  - EmailJS integration for form submission
- **Social Media Links:** GitHub, LinkedIn, WhatsApp
- **Availability Status:** Currently accepting new projects

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)
- Text editor or IDE (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adrsy6394/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **Open the project**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **View the website**
   - Open your browser and navigate to `http://localhost:8000` (if using local server)
   - Or simply double-click `index.html` to open in browser

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
│
└── Images/                 # Image assets
    ├── AK_LOGO_preview.png
    ├── adarsh_profile_image_preview.png
    ├── AdarshYadavResume (2).pdf
    ├── Screenshot_ai-chatbot_project.png
    └── tailwind-css-logo-removebg-preview.png
```

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Get your credentials:**
   - User ID: `of1_JRTCzi8LfATGO` (currently configured)
   - Service ID
   - Template ID

3. **Update the JavaScript:**
   ```javascript
   // In the HTML file, the EmailJS is already initialized
   emailjs.init("of1_JRTCzi8LfATGO");
   
   // Configure your service and template IDs in script.js
   ```

4. **Create an email template** in EmailJS dashboard with these variables:
   - `{{name}}`
   - `{{email}}`
   - `{{subject}}`
   - `{{message}}`

## 🎨 Customization

### Personal Information
1. **Update personal details** in `index.html`:
   - Name, title, description in hero section
   - Contact information in contact section
   - Social media links
   - Resume/CV file path

2. **Replace images** in the `Images/` folder:
   - `adarsh_profile_image_preview.png` - Profile photos
   - `Screenshot_ai-chatbot_project.png` - Project screenshots
   - `AK_LOGO_preview.png` - Logo/brand image
   - `AdarshYadavResume (2).pdf` - Resume PDF file

3. **Modify content sections:**
   - About section text and statistics
   - Skills and percentages
   - Projects information and links
   - Education and experience timeline

### Styling
1. **Colors and themes** in `styles.css`:
   - Primary color variables
   - Dark/light theme colors
   - Gradient backgrounds

2. **Typography:**
   - Font families (currently using system fonts)
   - Font sizes and weights
   - Text styles and spacing

3. **Layout and spacing:**
   - Section margins and padding
   - Grid and flexbox layouts
   - Responsive breakpoints

### Functionality
1. **Add new projects:**
   - Add project cards in the projects section
   - Include project images, descriptions, and tech tags
   - Add live demo and GitHub repository links

2. **Modify animations:**
   - Typing effect words in hero section
   - Skill progress bar percentages
   - Theme toggle animations

## ⚡ Performance

- **Optimized images** - Compressed and properly sized images
- **External CDN** - Font Awesome loaded from CDN
- **Efficient animations** - CSS transforms and smooth transitions
- **Mobile-first approach** - Fast loading on mobile devices
- **Semantic HTML** - Proper structure for better performance and SEO

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some limitations)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Adarsh Yadav** - Frontend Developer

- **Email:** adarshyadav95115@gmail.com
- **Phone:** +91 6394722388
- **LinkedIn:** [linkedin.com/in/adarshyadav2006](https://linkedin.com/in/adarshyadav2006)
- **GitHub:** [github.com/adrsy6394](https://github.com/adrsy6394)
- **Location:** Gorakhpur, Uttar Pradesh, India

---

## 🙏 Acknowledgments

- Font Awesome for icons and visual elements
- EmailJS for contact form functionality
- The web development community for inspiration and best practices
- ITM College of Management for educational support

---

**⭐ If you like this project, please give it a star on GitHub! ⭐**

---

*This portfolio showcases my journey as a Frontend Developer. Feel free to explore the code and reach out for any collaborations or opportunities!*



styles.css file:-


# Portfolio Styles Documentation

A comprehensive CSS architecture documentation for the modern portfolio website. This document outlines the styling system, design patterns, and responsive behavior implemented in `styles.css`.

## 📋 Table of Contents

- [CSS Architecture](#css-architecture)
- [Design System](#design-system)
- [Color Themes](#color-themes)
- [Layout Structure](#layout-structure)
- [Component Styles](#component-styles)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)

## 🏗 CSS Architecture

### Structure Overview
The CSS follows a modular, component-based architecture with:
- **CSS Custom Properties** for theming and consistency
- **BEM-like naming conventions** for component organization
- **Mobile-first responsive design** approach
- **Smooth animations and transitions** throughout

### File Organization
```
styles.css
├── CSS Variables (Theme System)
├── Reset & Base Styles
├── Header & Navigation
├── Hero Section
├── About Section
├── Skills Section
├── Projects Section
├── Resume Section
├── Contact Section
├── Animations & Keyframes
└── Responsive Media Queries
```

## 🎨 Design System

### CSS Custom Properties
```css
:root {
    /* Primary Colors */
    --primary-color: #3b82f6;
    --primary-hover: #2563eb;
    
    /* Text Colors */
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    
    /* Background Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-gradient-start: #dbeafe;
    --bg-gradient-end: #e0e7ff;
    
    /* UI Elements */
    --border-color: #e5e7eb;
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Typography Scale
- **Hero Title**: 3.5rem (56px) - Bold, prominent display
- **Section Titles**: 2.5rem (40px) - Section headings
- **Subsection Titles**: 1.75rem (28px) - Component headings
- **Body Text**: 1rem (16px) - Regular content
- **Small Text**: 0.875rem (14px) - Captions and labels

### Spacing System
- **Container Max Width**: 1200px
- **Section Padding**: 6rem vertical, 2rem horizontal
- **Component Gaps**: 1rem, 1.5rem, 2rem, 4rem
- **Border Radius**: 0.5rem, 1rem, 1.5rem for different components

## 🌙 Color Themes

### Light Theme (Default)
- Primary: Blue (#3b82f6)
- Background: White (#ffffff)
- Text: Dark Gray (#1f2937)
- Secondary Background: Light Gray (#f9fafb)

### Dark Theme
```css
[data-theme="dark"] {
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --bg-primary: #111827;
    --bg-secondary: #1f2937;
    --bg-gradient-start: #1f2937;
    --bg-gradient-end: #374151;
    --border-color: #374151;
}
```

### Theme Implementation
- Uses `data-theme="dark"` attribute on body
- Smooth transitions between themes (0.3s ease)
- All components inherit theme colors via CSS variables

## 📐 Layout Structure

### Grid Systems
- **Hero Section**: 2-column grid (1fr 1fr)
- **About Section**: 2-column grid with centered content
- **Skills Section**: 2-column category grid + flexible tech icons
- **Projects**: Auto-fit grid (min 350px columns)
- **Resume**: 2-column timeline layout
- **Contact**: 2-column info + form layout

### Container System
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```

## 🧩 Component Styles

### Header & Navigation
- **Fixed positioning** with backdrop blur effect
- **Hamburger menu** for mobile devices
- **Theme toggle button** with smooth icon transitions
- **Scroll-based styling** changes on scroll

### Hero Section
- **Gradient background** with CSS linear-gradient
- **Typing animation** with custom keyframes
- **Profile image** with gradient border and pulse effect
- **Social links** with hover transformations

### Skills Section
- **Progress bars** with animated fill effects
- **Tech stack icons** with hover scale effects
- **Shimmer animation** on skill progress bars
- **Category-based organization** with icon headers

### Projects Section
- **Filter system** with active state styling
- **Card hover effects** with image scaling and overlay
- **Tech tags** with color-coded backgrounds
- **Staggered animations** for card appearance

### Resume Section
- **Timeline design** with vertical line and dots
- **Card-based layout** for timeline items
- **Highlight tags** for skills and achievements
- **Download button** with loading state animation

### Contact Section
- **Two-column layout** (info + form)
- **Interactive cards** with hover effects
- **Social media links** with brand-specific colors
- **Form validation** styling for success/error states

## ✨ Animations

### Keyframe Animations
```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
```

### Animation Classes
- **.fadeInUp**: Slide up with fade effect
- **.scaleIn**: Scale in with fade effect
- **.float**: Continuous floating motion
- **.pulse**: Pulsing opacity effect

### Transition System
- **Default transitions**: 0.3s ease for most interactions
- **Hover effects**: Transform and box-shadow changes
- **Theme transitions**: Smooth color changes
- **Staggered delays**: Sequential animation timing

## 📱 Responsive Design

### Breakpoint System
```css
/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

### Mobile-First Approach
- Base styles designed for mobile devices
- Progressive enhancement for larger screens
- Flexible grid systems that collapse on smaller screens

### Key Responsive Features
- **Navigation**: Hamburger menu below 768px
- **Typography**: Reduced font sizes on mobile
- **Grid layouts**: Single column on mobile
- **Spacing**: Reduced padding and margins
- **Images**: Flexible sizing with maintained aspect ratios

### Mobile Optimizations
- **Touch-friendly buttons**: Minimum 44px touch targets
- **Readable text**: Appropriate font sizes for mobile
- **Optimized images**: Proper sizing for device capabilities
- **Smooth scrolling**: Enhanced mobile scroll experience

## ⚡ Performance Optimizations

### CSS Optimizations
- **Custom properties**: Efficient theme management
- **Transform animations**: Hardware acceleration
- **Efficient selectors**: Minimal specificity conflicts
- **Lazy loading**: Images with `loading="lazy"`

### Animation Performance
- **Transform-only animations**: Avoid layout thrashing
- **Will-change property**: Optimize for animations
- **Reduced motion**: Respect user preferences
- **GPU acceleration**: 3D transforms for smooth animations

## 🌐 Browser Support

### Supported Browsers
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions  
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Internet Explorer**: 11+ (with limitations)

### Modern CSS Features Used
- **CSS Grid**: With flexbox fallbacks
- **CSS Custom Properties**: With fallback values
- **Backdrop Filter**: Progressive enhancement
- **CSS Transitions**: Smooth interactions

### Fallbacks Provided
- **Grid to Flexbox**: For older browsers
- **Custom Properties**: Static color fallbacks
- **Modern Selectors**: Alternative selector patterns

## 🛠 Maintenance Guidelines

### Adding New Components
1. Follow existing naming conventions
2. Use CSS custom properties for colors
3. Include responsive styles
4. Add appropriate animations
5. Test across all breakpoints

### Theme Modifications
1. Update CSS custom properties in `:root`
2. Add corresponding dark theme values
3. Test color contrast ratios
4. Verify accessibility compliance

### Performance Considerations
- Minimize use of expensive CSS properties
- Use transform and opacity for animations
- Optimize image assets
- Consider lazy loading for below-fold content

---

## 📊 Style Statistics

- **Total CSS Rules**: ~500+ selectors
- **Animation Keyframes**: 8 unique animations
- **Responsive Breakpoints**: 2 main breakpoints
- **Color Variables**: 12 theme-aware properties
- **Component Sections**: 7 major sections
- **Browser Support**: 95%+ modern browsers

---

*This documentation covers the complete styling architecture for the portfolio website. For implementation details or modifications, refer to the specific component sections above.*


