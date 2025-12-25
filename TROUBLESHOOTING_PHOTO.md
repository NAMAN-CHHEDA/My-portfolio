# 🖼️ Troubleshooting Photo Not Showing on Vercel

## Issue
Photo (`PHOTO.jpg`) not displaying on Vercel deployment.

## Quick Fixes

### 1. Verify File is in GitHub Repo
Make sure `PHOTO.jpg` is actually in the `public/` folder on GitHub:

1. Go to your GitHub repo
2. Navigate to `public/PHOTO.jpg`
3. Verify the file exists and has content (not 0 bytes)

### 2. Check File Name (Case Sensitive!)
- ✅ Correct: `PHOTO.jpg`
- ❌ Wrong: `photo.jpg`, `Photo.jpg`, `PHOTO.JPG`

The code uses `/PHOTO.jpg` - the filename must match exactly!

### 3. Ensure File is Committed
If you added the file through GitHub web interface, make sure it's committed:

```bash
# Pull latest from GitHub
git pull origin main

# Check if file exists locally
ls public/PHOTO.jpg

# If missing, add it manually and commit
git add public/PHOTO.jpg
git commit -m "Add PHOTO.jpg"
git push
```

### 4. Check File Size
- Maximum recommended: 2-3 MB for photos
- If too large, compress it:
  - Use [TinyPNG](https://tinypng.com/) or similar
  - Resize to reasonable dimensions (e.g., 800x800px)

### 5. Verify Build Process
After pushing to GitHub, check Vercel build logs:

1. Go to Vercel Dashboard
2. Click on your project
3. Check "Deployments" → Latest deployment → "Build Logs"
4. Look for any errors related to `PHOTO.jpg`

### 6. Clear Cache and Redeploy
Sometimes Vercel caches files:

1. Go to Vercel Dashboard
2. Click on your project → Settings → General
3. Click "Redeploy" or trigger a new deployment

---

## Alternative Solutions

### Option 1: Use Google Drive for Photo (Same as PDFs)
If photos still don't work, you can host the photo on Google Drive:

1. Upload `PHOTO.jpg` to Google Drive
2. Get shareable link
3. Extract FILE_ID
4. Use this URL format:
   ```
   https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
   ```
5. Update `Home.jsx` line 113:
   ```jsx
   src="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
   ```

### Option 2: Use a CDN/Image Hosting
- Upload to [Imgur](https://imgur.com), [Cloudinary](https://cloudinary.com), or similar
- Use the direct image URL

### Option 3: Import Image in Code
Move photo to `src/assets/` and import:

```jsx
import photo from '../assets/PHOTO.jpg'

// Then use:
<img src={photo} alt="Naman Chheda portrait" />
```

---

## Verification Steps

1. ✅ File exists in `public/PHOTO.jpg` on GitHub
2. ✅ Filename matches exactly: `PHOTO.jpg` (uppercase)
3. ✅ File is committed and pushed
4. ✅ File size is reasonable (< 3MB)
5. ✅ Vercel build completes without errors
6. ✅ Check browser console for 404 errors on `/PHOTO.jpg`

---

## Most Common Issues

1. **File not actually in repo** - Add it and commit
2. **Case sensitivity** - Use exact case: `PHOTO.jpg`
3. **File too large** - Compress the image
4. **Build cache** - Trigger a fresh deployment on Vercel

---

If none of these work, share:
- Browser console errors (F12 → Console)
- Vercel build logs
- File size and format of PHOTO.jpg

