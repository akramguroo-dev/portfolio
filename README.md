# Akram Guroo - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and learning journey as a full-stack developer. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live Demo:** [hirepath-portfolio.vercel.app](https://hirepath-portfolio.vercel.app)  
📧 **Contact:** [akramguroo.dev@gmail.com](mailto:akramguroo.dev@gmail.com)  
🔗 **GitHub:** [github.com/akramguroo-dev](https://github.com/akramguroo-dev)

---

## 🎯 Overview

This portfolio demonstrates my proficiency in modern web development, system design, and full-stack architecture. It showcases:

- **HirePath**: A production-ready MERN job portal with 50+ features
- **Smart Chef**: AI-powered recipe generator using Groq API & Meta's Llama 3.3
- My learning journey from fundamentals to professional development
- Complete tech stack and professional achievements

---

## ✨ Features

### Pages & Components

- **Home Page**: Hero section, about bio, tech stack, featured projects
- **Projects Page**: Grid layout showcasing all projects with details
- **About Page**: Detailed learning journey, timeline, achievements, and goals
- **Contact Page**: Form with validation and Formspree integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Styling**: Gradient backgrounds, smooth transitions, hover effects

### Key Features

✅ **TypeScript**: Type-safe React components  
✅ **File-based Routing**: Next.js 13+ app router  
✅ **Reusable Components**: ProjectCard component  
✅ **Centralized Config**: Single source of truth for data  
✅ **Form Validation**: Client-side validation + Formspree backend  
✅ **Icon Library**: Lucide React icons  
✅ **SEO Optimized**: Metadata and proper HTML structure  
✅ **Git & GitHub**: Clean commit history with semantic messages  

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with SSR & static generation
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - SVG icons

### Deployment
- **Vercel** - Frontend hosting (automatic deployments from GitHub)
- **Formspree** - Form submission handling

### Development Tools
- **Git & GitHub** - Version control
- **VS Code** - Code editor
- **Node.js & npm** - Package management

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akramguroo-dev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   └── page.tsx            # Projects grid page
│   └── contact/
│       └── page.tsx            # Contact form page
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   └── ProjectCard.tsx         # Reusable project card
├── lib/
│   └── config.ts               # Centralized config (projects, tech stack, etc.)
├── public/                      # Static assets
├── package.json
└── README.md
```

---

## 🎨 Color Scheme & Design

- **Primary**: Blue (#008BDC, #0077BA)
- **Secondary**: Indigo
- **Background**: Light gray (#F8F9FB)
- **Text**: Dark gray (#212121, #484848)
- **Accents**: Green (success), Red (errors)

---

## 📚 Key Projects Showcased

### 1. **HirePath** - Lead Full Stack Developer
**Live:** https://hirepath-eight.vercel.app  
**GitHub:** https://github.com/akramguroo-dev/hirepath  
**Backend:** https://hirepath-api.onrender.com

A production-ready MERN internship & job portal with:
- 50+ REST API endpoints
- JWT authentication & role-based access control
- Cloudinary integration (photo/resume uploads)
- Application tracking system
- Feedback & rating system
- Auto-closing jobs on deadline (Node cron)
- 92/100 Lighthouse accessibility score

**Tech Stack:** React, Node.js, MongoDB, Express, Tailwind, JWT, Cloudinary

**My Role:**
- Architected entire full-stack system
- Developed all backend endpoints
- Implemented security (JWT, RBAC, protected APIs)
- Led 2-person team
- Handled deployment & DevOps

---

### 2. **Smart Chef** 🍳 - AI Recipe Generator
**Live:** https://smart-chef-react-app.vercel.app  
**GitHub:** https://github.com/akramguroo-dev/smart-chef  
**Backend:** https://smart-chef-backend.onrender.com

An AI-powered recipe generator using Meta's Llama 3.3 model via Groq API.

**Tech Stack:** React, Node.js, Groq API, Llama 3.3, Vercel, Render

---

## 📊 Performance & Accessibility

- **Lighthouse Scores** (on HirePath):
  - Accessibility: 92/100
  - Performance: 54/100 (optimized for fast connections)
  - Best Practices: 100/100
  - SEO: 83/100

---

## 🔧 Configuration

### Environment Variables

This portfolio doesn't require environment variables to run locally. The Formspree form ID is hardcoded in the Contact page.

For custom setup:
- Create `.env.local` if needed
- No sensitive data is stored in this portfolio

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: add portfolio site"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Vercel automatically deploys on every push to main

3. **Custom Domain** (Optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain

---

## 📝 Git Workflow

This project uses semantic commit messages:

```bash
git commit -m "feat: add Contact page with form validation"
git commit -m "fix: improve input text visibility"
git commit -m "chore: update PROGRESS.md"
git commit -m "refactor: extract ProjectCard component"
```

**Commit Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code restructuring
- `chore:` - Setup/config
- `docs:` - Documentation

---

## 🎓 Learning Outcomes

Building this portfolio, I learned:

✅ **Next.js 15** - App router, file-based routing, layouts, 'use client'  
✅ **TypeScript** - Interfaces, generics, type annotations, type safety  
✅ **React Hooks** - useState, event handling, form management  
✅ **Component Design** - Reusable components, props typing  
✅ **Tailwind CSS** - Utility-first CSS, responsive design  
✅ **Form Handling** - Validation, Formspree integration  
✅ **Git & GitHub** - Version control, semantic commits  
✅ **Deployment** - Vercel deployment, environment management  

---

## 📧 Contact & Social

- **Email:** akramguroo.dev@gmail.com
- **GitHub:** https://github.com/akramguroo-dev
- **LinkedIn:** (Coming soon)
- **Portfolio:** https://hirepath-portfolio.vercel.app

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment
- **Tailwind Labs** - For Tailwind CSS
- **My Mentor** - For guidance and feedback
- **Dayan Hanief Shah** - HirePath frontend collaboration

---

## 📄 License

This portfolio is open source and available under the MIT License.

---

## 🚀 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Blog section for technical articles
- [ ] More interactive project showcases
- [ ] Testimonials section
- [ ] PDF resume download
- [ ] Analytics dashboard

---

**Last Updated:** May 2026  
**Status:** Production Ready ✅

---

*Built with ❤️ by Akram Guroo*