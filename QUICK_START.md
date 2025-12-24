# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Customize Your Information

**Essential updates:**
- Replace `yourusername` with your GitHub username (search across all files)
- Replace `your.email@example.com` with your email
- Update LinkedIn URL in Contact and Footer components
- Add your resume PDF to `public/resume.pdf`
- Edit `src/data/projects.json` with your actual projects

**Quick find & replace:**
- Search for: `yourusername` → Replace with: `your-github-username`
- Search for: `your.email@example.com` → Replace with: `your-actual-email@example.com`

### 3. Test Locally
```bash
npm run dev
```
Visit `http://localhost:5173` to see your portfolio.

## 📝 Adding a New Project

Edit `src/data/projects.json` and add a new project object:

```json
{
  "id": 5,
  "title": "My New Project",
  "description": "Full description here",
  "shortDescription": "Brief description for cards",
  "tags": ["Machine Learning", "Python"],
  "tech": ["Python", "Scikit-learn"],
  "repoUrl": "https://github.com/yourusername/project",
  "demoUrl": "",
  "highlights": ["Achievement 1", "Achievement 2"],
  "metrics": {
    "accuracy": "90%",
    "dataset": "Dataset info",
    "notes": "Additional notes"
  },
  "images": [],
  "featured": true
}
```

## 🚀 Deploying Your Portfolio

### Option 1: Deploy to Vercel (Easiest - Recommended) ⭐

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → Import your repository
4. Click **"Deploy"** (zero configuration needed!)
5. Your site is live in ~30 seconds! 🎉

**Advantages:**
- ✅ Zero configuration
- ✅ Automatic HTTPS & CDN
- ✅ Custom domain support (free)
- ✅ Auto-deploys on every push
- ✅ No base path configuration needed

See `VERCEL_DEPLOY.md` for detailed instructions.

### Option 2: Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository **Settings → Pages**
3. Under "Source", select **"GitHub Actions"**
4. The workflow will automatically deploy on every push to `main`

**⚠️ Important: Set Base Path**

Before deploying, check `vite.config.js`:

- **If repo is `<username>.github.io`**: `base: '/'`
- **If repo has any other name**: `base: '/<repo-name>/'`

Example: If your repo is `portfolio`, use:
```js
base: '/portfolio/',
```

## ✅ Checklist Before Deploying

- [ ] Updated all social links (GitHub, LinkedIn, Email)
- [ ] Added your resume PDF to `public/resume.pdf`
- [ ] Updated projects in `src/data/projects.json`
- [ ] Updated bio and education info in About page
- [ ] Set correct `base` path in `vite.config.js`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`

## 🎨 Customization Tips

- **Colors**: Edit Tailwind classes in components (blue-600, purple-600, etc.)
- **Fonts**: Change font in `tailwind.config.js` (currently Inter)
- **Layout**: Modify component files in `src/pages/` and `src/components/`
- **Styling**: All styles use Tailwind CSS utility classes

## 📚 Need Help?

- See full README.md for detailed documentation
- Check React Router docs for routing changes
- Tailwind CSS docs for styling: https://tailwindcss.com/docs

---

**Ready to deploy?** Push to GitHub and enable Pages! 🎉

