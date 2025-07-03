# Privacy Policy Static Website

A comprehensive, mobile-app focused privacy policy website built with Next.js and optimized for deployment to Apple App Store and Google Play Store requirements.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with clean, professional styling
- **SEO Optimized**: Structured data, meta tags, and optimized for search engines
- **Legal Compliance**: Covers GDPR, CCPA, and mobile app store requirements
- **Static Export**: Generates static files for fast loading and cheap hosting
- **Multi-Page Structure**: Privacy Policy, Terms of Service, and Cookie Policy
- **Apple & Google Store Ready**: Meets privacy policy requirements for both stores

## 📱 Pages Included

1. **Privacy Policy** (`/`) - Main privacy policy page
2. **Terms of Service** (`/terms`) - Comprehensive terms of service
3. **Cookie Policy** (`/cookies`) - Cookie usage and management

## 🛠️ Built With

- **Next.js 15.3.4** - React framework with static export capability
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Static Export** - Generates static HTML files for maximum compatibility

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder with static export in the `out` folder.

## 🌐 Deployment Options

### 1. Vercel (Recommended - FREE)

**Why Vercel:**
- Free tier with generous limits
- Automatic deployments from Git
- Global CDN
- Perfect Next.js integration
- Custom domains included

**Deploy Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

**Cost:** Free forever for personal projects

### 2. Netlify (Alternative - FREE)

**Deploy Steps:**
1. Build the project: `npm run build`
2. Drag the `out` folder to [netlify.com/drop](https://netlify.com/drop)
3. Or connect your Git repository for automatic deployments

**Cost:** Free for personal use

### 3. GitHub Pages (FREE)

**Deploy Steps:**
1. Build: `npm run build`
2. Push the `out` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

**Cost:** Free

### 4. Firebase Hosting (FREE Tier)

**Deploy Steps:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

**Cost:** Free tier with 10GB storage, 360MB/day transfer

## 📝 Customization

### 1. Update Company Information

Replace the placeholder text in all files:
- `[Your Company Name]` → Your actual company name
- `[Your Address]` → Your business address
- `[your-email@example.com]` → Your contact email
- `[Your Phone Number]` → Your phone number

### 2. Customize Content

Edit the following files to match your app's specific requirements:
- `src/app/page.tsx` - Privacy Policy content
- `src/app/terms/page.tsx` - Terms of Service content
- `src/app/cookies/page.tsx` - Cookie Policy content

### 3. Update Metadata

In `src/app/layout.tsx`, update:
- Site title and description
- Open Graph tags
- Twitter card information
- Keywords

## 📱 Mobile App Store Requirements

### Apple App Store
✅ Privacy Policy URL required for app submission  
✅ Must be accessible via direct link  
✅ Must cover data collection and usage  
✅ COPPA compliance for apps targeting children  

### Google Play Store
✅ Privacy Policy URL required in app listing  
✅ Must be publicly accessible  
✅ Must describe data handling practices  
✅ Must comply with applicable laws (GDPR, CCPA)  

## 📄 File Structure

```
privacy-policy-site/
├── src/
│   └── app/
│       ├── layout.tsx         # Root layout with metadata
│       ├── page.tsx           # Privacy Policy (homepage)
│       ├── terms/
│       │   └── page.tsx       # Terms of Service
│       ├── cookies/
│       │   └── page.tsx       # Cookie Policy
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## 📝 Legal Disclaimer

This template provides a starting point for privacy policies and terms of service. **You should have these documents reviewed by a qualified attorney** to ensure they meet your specific legal requirements and comply with applicable laws in your jurisdiction.

## 🤝 Support

For questions about deployment or customization:
1. Check the deployment platform's documentation
2. Review Next.js static export documentation
3. Consult with legal counsel for policy content
