# Data Analyst Portfolio

A modern, responsive portfolio website for a Data Analyst / Analytics Masters student. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Clean, modern, professional design
- 🌙 Dark mode toggle
- 📱 Fully responsive (mobile-first)
- ⚡ Fast and optimized
- ♿ Accessible
- 🔍 SEO-friendly
- 📊 Project showcase with filtering
- 📄 Resume embedding
- 🚀 Deployable to Vercel, GitHub Pages, or Netlify

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Vercel/GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### 1. Update Personal Information

Edit the following files to customize your information:

- **Home page**: `src/pages/Home.jsx` - Update name, title, summary, and social links
- **About page**: `src/pages/About.jsx` - Update bio, education, and skills
- **Contact page**: `src/pages/Contact.jsx` - Update contact information
- **Footer**: `src/components/Footer.jsx` - Update social links
- **Navbar**: `src/components/Navbar.jsx` - Update site name if needed

### 2. Add Your Projects

Edit `src/data/projects.json` to add or update your projects:

```json
{
  "id": 5,
  "title": "Your Project Title",
  "description": "Full description of your project",
  "shortDescription": "Brief one-liner for cards",
  "tags": ["Machine Learning", "Python"],
  "tech": ["Python", "Scikit-learn", "Pandas"],
  "repoUrl": "https://github.com/yourusername/project",
  "demoUrl": "https://your-demo-url.com",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3"
  ],
  "metrics": {
    "accuracy": "90%",
    "dataset": "Dataset description",
    "notes": "Additional notes"
  },
  "images": [],
  "featured": true
}
```

**Fields:**
- `id`: Unique number (increment from existing projects)
- `title`: Project name
- `description`: Full description (shown on detail page)
- `shortDescription`: Brief description (shown on cards)
- `tags`: Array of category tags (used for filtering)
- `tech`: Array of technologies used
- `repoUrl`: GitHub repository URL (leave empty string if none)
- `demoUrl`: Live demo URL (leave empty string if none)
- `highlights`: Array of key achievements
- `metrics`: Object with accuracy, dataset, notes (all optional)
- `images`: Array of image paths (for future use)
- `featured`: Boolean - true for featured projects

### 3. Add Your Resume

1. Replace `public/resume.pdf` with your actual resume PDF
2. The resume will be embedded on the Resume page and available for download

### 4. Update Social Links

Search and replace these placeholders throughout the codebase:
- `yourusername` - Your GitHub username
- `your.email@example.com` - Your email address
- `linkedin.com/in/yourusername` - Your LinkedIn profile

### 5. Configure GitHub Pages Base Path

In `vite.config.js`, set the `base` path:

- **If your repo is named `<username>.github.io`**: Use `base: '/'`
- **If your repo has any other name**: Use `base: '/<repo-name>/'`

For example, if your repo is `portfolio`, use:
```js
base: '/portfolio/',
```

### 6. Enable Contact Form (Optional)

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. In `src/pages/Contact.jsx`, replace `YOUR_FORM_ID` with your actual form ID
4. Or remove the form section if you prefer email-only contact

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### 🚀 Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest deployment option with automatic HTTPS, CDN, and zero configuration.

#### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Import your repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**
7. Your site will be live in seconds! 🎉

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

#### Vercel Advantages

- ✅ Zero configuration needed (works out of the box)
- ✅ Automatic HTTPS and CDN
- ✅ Custom domain support (free)
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ No base path configuration needed
- ✅ React Router works perfectly

Your site will be available at: `https://your-project-name.vercel.app`

---

### 📄 Deploy to GitHub Pages

#### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`

#### Manual Deployment

1. Build the project: `npm run build`
2. Go to repository Settings → Pages
3. Under "Source", select the `main` branch and `/dist` folder
4. Save and wait for deployment

#### Important Notes for GitHub Pages

- Make sure the `base` path in `vite.config.js` matches your repository name (unless it's `<username>.github.io`)
- The GitHub Actions workflow will handle the build and deployment automatically
- Your site will be available at `https://<username>.github.io/<repo-name>/` (or `https://<username>.github.io/` if repo is named `<username>.github.io`)

## Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Your resume (replace with actual PDF)
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── data/
│   │   ├── projects.json   # Project data (edit this!)
│   │   └── projects.js    # Projects export
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── Projects.jsx    # Projects listing
│   │   ├── ProjectDetail.jsx # Project detail page
│   │   ├── Resume.jsx      # Resume page
│   │   ├── About.jsx       # About page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── index.html
├── package.json
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── vercel.json             # Vercel configuration
└── README.md
```

## Tips for Adding Projects

1. **Start with your best work** - Feature your most impressive projects
2. **Include metrics** - Numbers make projects more credible (accuracy, dataset size, impact)
3. **Add links** - GitHub repos and live demos increase engagement
4. **Use descriptive tags** - Helps with filtering and discoverability
5. **Keep descriptions concise** - Short descriptions for cards, detailed on project pages

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Built with ❤️ for data analysts and analytics students.

