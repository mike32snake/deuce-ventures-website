# Deuce Ventures LLC Website

A professional, modern website for Deuce Ventures LLC - a personal investment firm led by JB Bowers, focusing on venture capital and alternative investments across technology, real estate, and growth equity sectors.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Fonts**: Playfair Display (serif) & Inter (sans-serif)

## Features

- **5 Core Pages**:
  - Homepage with hero section, portfolio highlights, and CTAs
  - About page with JB Bowers bio, education, and investment philosophy
  - Portfolio page with 20+ investments across 3 sectors
  - Investment Criteria page with thesis and parameters
  - Contact page with form and information

- **Design Elements**:
  - Fully responsive design for all devices
  - Moderate animations (scroll effects, hover states, transitions)
  - Professional color scheme (Deep Purple, White, Black)
  - Clean, minimalist layout with ample white space
  - Accessible (WCAG 2.1 AA compliant)

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Deployment to Vercel

### Option 1: Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project and deploy.

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Environment Variables

No environment variables are required for the current setup. The contact form is front-end only and ready to be connected to a backend service (FormSpree, Netlify Forms, etc.).

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── Card.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Criteria.tsx
│   └── Contact.tsx
├── App.tsx          # Main app component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind imports

public/
├── logo.jpg         # Deuce Ventures logo
└── wordmark.jpeg    # Deuce Ventures wordmark
```

## Brand Colors

- **Primary Purple**: `#4A2C7E` (deuce-purple)
- **Dark Text**: `#333333` (deuce-dark)
- **Light Background**: `#F8F9FA` (deuce-light)
- **White**: `#FFFFFF`
- **Black**: `#000000`

## Customization

### Update Contact Email
Change the email in:
- `src/pages/Contact.tsx` (line ~160)
- `src/pages/Home.tsx` (line ~140)

### Update LinkedIn URL
Update the LinkedIn link in:
- `src/components/Footer.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Home.tsx`

### Add JB Bowers Headshot
Replace the placeholder in `src/pages/About.tsx` with an actual image:
1. Add the image to the `public/` folder
2. Update the placeholder div with: `<img src="/headshot.jpg" alt="JB Bowers" />`

### Connect Contact Form
The form is ready for backend integration. Options:
- **FormSpree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form element
- **Netlify Forms**: Add `netlify` attribute to the form
- **Custom API**: Update the `handleSubmit` function in `Contact.tsx`

## SEO

The site includes comprehensive SEO meta tags:
- Title and description tags
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML5 structure
- Optimized for search engines

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Deuce Ventures LLC. All rights reserved.

## Support

For questions or issues, contact: jb@deuceventures.com
