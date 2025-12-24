# 🚀 Deployment Checklist & Guide

## ✅ Pre-Deployment Checklist

### 1. PDF Files Required in GitHub Repo

**YES, you need to push PDFs to GitHub!** Files in the `public/` folder are served directly by the website.

**Required PDFs:**
- ✅ Resume PDF: `public/Naman Vipul Chheda_GoFundMe_20251211.pdf`
- ✅ Resume PDF (alternative): `public/resume.pdf` (if referenced in Home.jsx)
- ✅ Publication 1: `public/Virtual_Sales_Assistant_A_Chrome_Extension_for_E-commerce_Websites.pdf`
- ✅ Publication 2: `public/Expert_Patient_Interaction_Language_Model_EPILM.pdf`

**Where to place them:**
```
portfolio/
├── public/
│   ├── Naman Vipul Chheda_GoFundMe_20251211.pdf  ← Your resume
│   ├── resume.pdf                                 ← If you use this path
│   ├── Virtual_Sales_Assistant_A_Chrome_Extension_for_E-commerce_Websites.pdf
│   ├── Expert_Patient_Interaction_Language_Model_EPILM.pdf
│   ├── PHOTO.jpg                                  ← Your profile photo
│   └── favicon.svg
```

### 2. Verify All Files Are Ready

- [ ] Resume PDF is in `public/` folder
- [ ] Publication PDFs are in `public/` folder
- [ ] Profile photo (`PHOTO.jpg`) is in `public/` folder
- [ ] All personal info is updated (no placeholders)
- [ ] Projects are updated in `src/data/projects.json`
- [ ] Tested locally with `npm run build` (builds successfully)

---

## 📤 Step-by-Step Deployment

### Step 1: Prepare Your Code

```bash
cd portfolio

# Make sure everything is working
npm run build
```

If build succeeds, you're ready!

### Step 2: Initialize Git (if not already done)

```bash
# Initialize git repository
git init

# Add all files (including PDFs!)
git add .

# Commit everything
git commit -m "Portfolio website ready for deployment"
```

### Step 3: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New repository"** (or the **+** icon)
3. Name it (e.g., `portfolio` or `my-portfolio`)
4. **Don't** initialize with README (you already have files)
5. Click **"Create repository"**

### Step 4: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push everything to GitHub
git push -u origin main
```

**Important:** This pushes ALL files including PDFs. Make sure:
- ✅ PDFs are in `public/` folder (they'll be publicly accessible)
- ✅ No sensitive information in PDFs
- ✅ PDFs are the final versions you want to share

### Step 5: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended - 2 minutes)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click **"Add New Project"**
   - Select your repository from the list
   - Vercel will auto-detect Vite settings

3. **Configure (Optional)**
   - Framework Preset: **Vite** (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Root Directory: `./` (or `./portfolio` if repo is in subfolder)

4. **Deploy**
   - Click **"Deploy"**
   - Wait ~30-60 seconds
   - Your site is live! 🎉

5. **Get Your URL**
   - Your site will be at: `https://your-project-name.vercel.app`
   - You can customize the domain later

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to portfolio folder
cd portfolio

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? (press enter for default)
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

---

## 🔍 Post-Deployment Verification

After deployment, check:

- [ ] Home page loads correctly
- [ ] Resume PDF opens and downloads
- [ ] Publication PDFs open correctly
- [ ] Profile photo displays
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Projects display correctly
- [ ] Dark mode works
- [ ] Mobile responsive

---

## 🔄 Updating Your Site

After initial deployment, updates are automatic:

1. **Make changes locally**
2. **Test with `npm run dev`**
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Updated projects"
   git push
   ```
4. **Vercel auto-deploys!** ✨
   - Usually takes 30-60 seconds
   - You'll get a notification when done

---

## 📝 Important Notes

### About PDFs in GitHub

**Yes, PDFs will be public:**
- Files in `public/` are served directly
- Anyone can access them via direct URL
- Example: `https://your-site.vercel.app/resume.pdf`

**If you want to keep PDFs private:**
- Don't put them in `public/`
- Use a cloud storage service (Google Drive, Dropbox)
- Link to external URLs instead
- Or use password protection

**For portfolio purposes:**
- Public PDFs are usually fine (resume, publications)
- Most portfolios have public resumes
- Publications are meant to be shared

### File Size Considerations

- GitHub has a 100MB file size limit per file
- PDFs are usually small (< 5MB)
- If PDFs are very large, consider compressing them

---

## 🆘 Troubleshooting

### PDFs Not Loading?

1. **Check file paths:**
   - PDFs must be in `public/` folder
   - Paths in code should start with `/` (e.g., `/resume.pdf`)
   - File names must match exactly (case-sensitive)

2. **Check file names:**
   - No spaces in file names (use underscores)
   - Example: `resume.pdf` not `My Resume.pdf`

3. **Rebuild and redeploy:**
   ```bash
   npm run build
   git add .
   git commit -m "Fix PDF paths"
   git push
   ```

### Build Fails?

1. **Check for errors:**
   ```bash
   npm run build
   ```

2. **Common issues:**
   - Missing dependencies: `npm install`
   - Syntax errors: Check console
   - Missing files: Verify all referenced files exist

### Site Not Updating?

1. **Check Vercel dashboard** for build status
2. **Wait 1-2 minutes** for deployment to complete
3. **Hard refresh** browser (Ctrl+F5 / Cmd+Shift+R)
4. **Check build logs** in Vercel dashboard

---

## 🎉 You're Done!

Once deployed, your portfolio will be live at:
- **Vercel:** `https://your-project-name.vercel.app`
- **Custom domain:** Add in Vercel settings (free!)

**Share your portfolio URL and start networking!** 🚀

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Alternative](README.md#deployment-to-github-pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

