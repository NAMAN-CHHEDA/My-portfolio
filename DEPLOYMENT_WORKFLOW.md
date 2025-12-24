# 🚀 Deployment Workflow - Step by Step

## ✅ Recommended Order: Customize → Test → Deploy

**Always customize your portfolio BEFORE deploying!**

---

## 📋 Complete Workflow

### STEP 1: Install & Test Locally (See It Working First)

```bash
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:5173` - you'll see the portfolio with placeholder content.

**Why?** This confirms everything works before you start customizing.

---

### STEP 2: Customize Your Information (Before Deploying!)

#### A. Quick Find & Replace (5 minutes)

Use your editor's Find & Replace (Ctrl+H / Cmd+H):

1. **Find:** `yourusername` → **Replace:** `your-github-username`
   - Appears in: Home.jsx, Contact.jsx, Footer.jsx, projects.json

2. **Find:** `your.email@example.com` → **Replace:** `your-actual-email`
   - Appears in: Home.jsx, Contact.jsx, Footer.jsx

3. **Find:** `linkedin.com/in/yourusername` → **Replace:** `linkedin.com/in/your-profile`
   - Appears in: Home.jsx, Contact.jsx, Footer.jsx

#### B. Update Projects (15-30 minutes)

Edit `src/data/projects.json`:
- Replace sample projects with YOUR actual projects
- Add real descriptions, metrics, highlights
- Update GitHub repo URLs

#### C. Add Your Resume (2 minutes)

1. Copy your resume PDF
2. Paste into `portfolio/public/` folder
3. Name it exactly: `resume.pdf`

#### D. Update Bio & Education (10 minutes)

Edit `src/pages/About.jsx`:
- Update bio paragraph
- Update education (school, graduation date, coursework)
- Update skills to match your actual skills

---

### STEP 3: Test Everything Locally (Before Deploying!)

```bash
npm run dev
```

**Checklist:**
- ✅ All links work (GitHub, LinkedIn, Email)
- ✅ Projects display correctly
- ✅ Resume PDF opens
- ✅ Dark mode works
- ✅ Mobile responsive (resize browser)
- ✅ Navigation works
- ✅ No placeholder text visible
- ✅ All your info is correct

**Build test:**
```bash
npm run build
```

If this succeeds, you're ready to deploy!

---

### STEP 4: Push to GitHub (After Customization)

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "My customized portfolio"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

---

### STEP 5: Deploy to Vercel (After Everything is Ready)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your repository
5. Click **"Deploy"**

**Your live portfolio will have:**
- ✅ Your real name and info
- ✅ Your actual projects
- ✅ Your resume
- ✅ All correct links

---

## ❌ What NOT to Do

### Don't Deploy First, Then Customize

**Why this is bad:**
- ❌ Placeholder content goes live publicly
- ❌ People might see "yourusername" and "your.email@example.com"
- ❌ Sample projects are visible
- ❌ You have to redeploy after every change
- ❌ Harder to test changes

### Don't Skip Local Testing

**Why this is bad:**
- ❌ Broken links go live
- ❌ Typos are public
- ❌ Missing resume file
- ❌ Projects don't display correctly

---

## ✅ Why Customize First?

1. **Test Locally** - See everything working before it's public
2. **No Placeholder Content** - Your site goes live with real info
3. **One-Time Deploy** - Deploy once with everything ready
4. **Professional** - First impression is polished
5. **Easy Updates** - Future changes auto-deploy via Vercel

---

## 🎯 Quick Summary

```
1. Install & test locally          → See it working
2. Customize your info            → Add your name, projects, resume
3. Test everything locally         → Make sure it's perfect
4. Push to GitHub                 → Save your work
5. Deploy to Vercel               → Go live! 🚀
```

---

## 🔄 After Initial Deployment

Once deployed, future updates are easy:

1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub: `git push`
4. Vercel auto-deploys! ✨

No need to redeploy manually - Vercel handles it automatically.

---

## 📝 Checklist Before Deploying

- [ ] Replaced all `yourusername` placeholders
- [ ] Replaced all `your.email@example.com` placeholders
- [ ] Updated LinkedIn URLs
- [ ] Added your resume PDF to `public/resume.pdf`
- [ ] Updated projects in `src/data/projects.json`
- [ ] Updated bio in `src/pages/About.jsx`
- [ ] Updated education info
- [ ] Tested locally - everything works
- [ ] Built successfully - `npm run build` works
- [ ] No placeholder content visible

**Only then:** Deploy to Vercel! 🚀

---

**Remember:** Customize → Test → Deploy. Always in that order!

