# ⚡ Quick Deployment Guide

## 🎯 Yes, PDFs Need to Be in GitHub!

**All PDFs must be in the `public/` folder and pushed to GitHub** for them to work on your deployed site.

---

## 📋 Files You Need Before Deploying

### Required PDFs (place in `public/` folder):

1. ✅ **Resume:** `Naman Vipul Chheda_GoFundMe_20251211.pdf`
2. ✅ **Resume (alternative):** `resume.pdf` (for Home page link)
3. ✅ **Publication 1:** `Virtual_Sales_Assistant_A_Chrome_Extension_for_E-commerce_Websites.pdf`
4. ✅ **Publication 2:** `Expert_Patient_Interaction_Language_Model_EPILM.pdf`
5. ✅ **Profile Photo:** `PHOTO.jpg`

---

## 🚀 Deploy in 5 Steps

### Step 1: Add PDFs to `public/` folder
```bash
# Copy your PDFs to:
portfolio/public/Naman Vipul Chheda_GoFundMe_20251211.pdf
portfolio/public/resume.pdf
portfolio/public/Virtual_Sales_Assistant_A_Chrome_Extension_for_E-commerce_Websites.pdf
portfolio/public/Expert_Patient_Interaction_Language_Model_EPILM.pdf
portfolio/public/PHOTO.jpg
```

### Step 2: Test Build Locally
```bash
cd portfolio
npm run build
```
If this succeeds, you're ready!

### Step 3: Push to GitHub
```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Portfolio ready for deployment"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your repository
5. Click **"Deploy"** (no config needed!)

### Step 5: Done! 🎉
Your site is live at: `https://your-project-name.vercel.app`

---

## ⚠️ Important Notes

### PDFs Will Be Public
- Files in `public/` are publicly accessible
- Anyone can download them via direct URL
- This is normal for portfolios (resumes/publications are meant to be shared)

### File Names Must Match Exactly
- Case-sensitive (e.g., `resume.pdf` not `Resume.PDF`)
- No spaces (use underscores: `My_Resume.pdf`)

### After Deployment
- Updates are automatic: just `git push` and Vercel redeploys
- Usually takes 30-60 seconds

---

## 🔍 Verify After Deployment

Check these work:
- [ ] Resume PDF opens/downloads
- [ ] Publication PDFs open
- [ ] Profile photo displays
- [ ] All links work

---

**See `DEPLOYMENT_CHECKLIST.md` for detailed instructions!**

