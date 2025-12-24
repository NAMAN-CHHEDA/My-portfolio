# Step-by-Step Customization Guide

## ✅ Recommended Workflow: Customize Locally FIRST, Then Push

**Why?** 
- Test everything before it goes live
- Don't expose placeholder info publicly
- Fix issues before deploying

---

## 📋 Step-by-Step Process

### STEP 1: Install & Test Locally (Before Any Changes)

```bash
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:5173` - you should see the portfolio with placeholder content.

### STEP 2: Customize Your Information

#### A. Update Personal Info (Quick Find & Replace)

**Files to update:**
1. `src/pages/Home.jsx` - Name, title, summary, social links
2. `src/pages/About.jsx` - Bio, education, skills
3. `src/pages/Contact.jsx` - Contact info
4. `src/components/Footer.jsx` - Social links

**Quick method - Use your editor's Find & Replace:**

1. **Find:** `yourusername` → **Replace:** `your-actual-github-username`
   - This appears in: Home.jsx, Contact.jsx, Footer.jsx, projects.json

2. **Find:** `your.email@example.com` → **Replace:** `your-actual-email@example.com`
   - This appears in: Home.jsx, Contact.jsx, Footer.jsx

3. **Find:** `linkedin.com/in/yourusername` → **Replace:** `linkedin.com/in/your-actual-linkedin`
   - This appears in: Home.jsx, Contact.jsx, Footer.jsx

#### B. Update Projects

Edit `src/data/projects.json`:
- Replace sample projects with YOUR actual projects
- Update GitHub repo URLs
- Add your real project descriptions, metrics, highlights

**Example project structure:**
```json
{
  "id": 1,
  "title": "Your Actual Project Name",
  "description": "What you built and why",
  "shortDescription": "Brief one-liner",
  "tags": ["Machine Learning", "Python"],
  "tech": ["Python", "Scikit-learn", "Pandas"],
  "repoUrl": "https://github.com/YOUR-USERNAME/your-repo",
  "demoUrl": "https://your-demo.com",
  "highlights": [
    "Achieved 90% accuracy",
    "Processed 10K+ records",
    "Reduced processing time by 50%"
  ],
  "metrics": {
    "accuracy": "90%",
    "dataset": "10,000 records",
    "notes": "Your notes here"
  },
  "images": [],
  "featured": true
}
```

#### C. Add Your Resume

1. Copy your resume PDF
2. Paste it into `portfolio/public/` folder
3. Name it exactly: `resume.pdf`

#### D. Update Education & Bio

Edit `src/pages/About.jsx`:
- Update the bio paragraph
- Update education section (school, graduation date, coursework)
- Update skills lists to match your actual skills

Edit `src/pages/Resume.jsx`:
- Update the text version of your resume (Experience, Skills, Education sections)

#### E. Set Base Path for GitHub Pages

Edit `vite.config.js`:

**If your GitHub repo will be named:**
- `<your-username>.github.io` → Keep `base: '/'`
- Anything else (e.g., `portfolio`, `my-portfolio`) → Change to `base: '/<repo-name>/'`

Example:
```js
// If repo is "portfolio"
base: '/portfolio/',
```

### STEP 3: Test Everything Locally

```bash
npm run dev
```

**Check:**
- ✅ All links work (GitHub, LinkedIn, Email)
- ✅ Projects display correctly
- ✅ Resume PDF opens
- ✅ Dark mode works
- ✅ Mobile responsive (resize browser)
- ✅ Navigation works
- ✅ No placeholder text visible

### STEP 4: Build Test (Make Sure It Builds)

```bash
npm run build
```

If this succeeds, you're ready to deploy!

### STEP 5: Push to GitHub

**First time setup:**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

**After making changes:**

```bash
git add .
git commit -m "Updated personal info and projects"
git push
```

### STEP 6: Deploy Your Portfolio

#### Option A: Deploy to Vercel (Easiest - Recommended) ⭐

1. Push your code to GitHub (if not already)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → Import your repository
4. Click **"Deploy"** (no configuration needed!)
5. Your site is live! 🎉

**Your site will be at:** `https://your-project-name.vercel.app`

See `VERCEL_DEPLOY.md` for detailed instructions.

#### Option B: Deploy to GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. The workflow will automatically deploy!

Your site will be live at:
- `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` (if repo has custom name)
- `https://YOUR-USERNAME.github.io/` (if repo is `YOUR-USERNAME.github.io`)

---

## 🔍 Files Checklist

Here are ALL the files you need to customize:

### Must Update:
- [ ] `src/pages/Home.jsx` - Name, title, summary, social links
- [ ] `src/pages/About.jsx` - Bio, education, skills
- [ ] `src/pages/Contact.jsx` - Contact info
- [ ] `src/components/Footer.jsx` - Social links
- [ ] `src/data/projects.json` - Your actual projects
- [ ] `public/resume.pdf` - Your resume (add the file)
- [ ] `vite.config.js` - Base path (if needed)
- [ ] `index.html` - Update meta description if desired

### Optional Updates:
- [ ] `src/pages/Resume.jsx` - Text version of resume
- [ ] `src/pages/Contact.jsx` - Formspree form ID (if using contact form)

---

## 🎯 Quick Customization Script

If you want to do a bulk find & replace, here's what to search for:

| Find | Replace With |
|------|--------------|
| `yourusername` | Your GitHub username |
| `your.email@example.com` | Your email |
| `linkedin.com/in/yourusername` | Your LinkedIn URL |
| `Data Analyst Portfolio` | Your preferred site title (in index.html) |

---

## ⚠️ Important Notes

1. **Don't push placeholder content** - Always customize first
2. **Test locally** - Make sure everything works before deploying
3. **Check base path** - Critical for GitHub Pages to work
4. **Resume PDF** - Must be named exactly `resume.pdf` in `public/` folder
5. **GitHub username** - Make sure it matches your actual GitHub username

---

## 🆘 Troubleshooting

**Site shows blank page after deploy?**
- Check `vite.config.js` base path matches your repo name
- Check browser console for errors

**Links don't work?**
- Make sure you replaced all `yourusername` placeholders
- Check URLs are correct (no typos)

**Resume doesn't load?**
- Make sure file is named `resume.pdf` (lowercase)
- Make sure it's in `public/` folder, not `src/`

---

**Ready?** Follow steps 1-6 above and you'll have a live portfolio! 🚀

