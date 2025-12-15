# 🚀 GitHub Pages Deployment Checklist - SPORTSEQUIP

> **Project**: React CRA Sports Equipment E-commerce  
> **Target Platform**: GitHub Pages  
> **Automation**: GitHub Actions CI/CD  
> **Created**: 2025-12-15

---

## 📋 Pre-Deployment Checklist

### 1️⃣ Repository Setup

- [ ] **Create GitHub Repository**
  - [ ] Repository created on GitHub
  - [ ] Repository name: `_______________`
  - [ ] Repository is public (required for free GitHub Pages)
  - [ ] Local project initialized with Git (`git init`)
  - [ ] Remote origin added: `git remote add origin <REPO_URL>`

- [ ] **Initial Commit**
  - [ ] All files staged: `git add .`
  - [ ] Initial commit created: `git commit -m "Initial commit"`
  - [ ] Pushed to GitHub: `git push -u origin main`

---

### 2️⃣ Package Configuration

- [ ] **Update package.json**
  - [ ] Add `homepage` field: `"homepage": "https://<USERNAME>.github.io/<REPO>/"`
  - [ ] Add `gh-pages` to devDependencies
  - [ ] Add `predeploy` script: `"predeploy": "npm run build"`
  - [ ] Add `deploy` script: `"deploy": "gh-pages -d build"`
  - [ ] Install gh-pages: `npm install --save-dev gh-pages`

- [ ] **Verify package.json syntax**
  - [ ] No trailing commas
  - [ ] Proper JSON formatting
  - [ ] All quotes are double quotes

**Example configuration**:
```json
{
  "homepage": "https://yourusername.github.io/spotrtsequiment/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```

---

### 3️⃣ Routing Configuration (Choose ONE)

#### Option A: HashRouter (Recommended for Beginners)

- [ ] **Modify src/App.js**
  - [ ] Change import: `BrowserRouter` → `HashRouter`
  - [ ] Line 2: `import { HashRouter as Router, Routes, Route } from 'react-router-dom';`
  - [ ] Save file

**Pros**: ✅ Simple, works immediately  
**Cons**: ⚠️ URLs contain `#` (e.g., `yoursite.com/#/shop`)

#### Option B: BrowserRouter with 404 Workaround (Clean URLs)

- [ ] **Create public/404.html**
  - [ ] Copy SPA redirect script (provided in implementation plan)
  - [ ] Adjust `pathSegmentsToKeep` if needed (usually `1`)

- [ ] **Modify public/index.html**
  - [ ] Add redirect script before closing `</head>` tag
  - [ ] Script handles query parameter conversion

**Pros**: ✅ Clean URLs without `#`  
**Cons**: ⚠️ More complex setup

---

### 4️⃣ GitHub Actions Workflow

- [ ] **Create .github/workflows directory**
  - [ ] Create folder: `.github/workflows/`
  - [ ] Create file: `deploy.yml`

- [ ] **Deploy workflow configuration**
  - [ ] Copy workflow YAML from implementation plan
  - [ ] Verify indentation (YAML sensitive)
  - [ ] Branch name matches: `main` or `master`
  - [ ] Node version specified: `18` or `20`

- [ ] **Commit workflow file**
  - [ ] `git add .github/workflows/deploy.yml`
  - [ ] `git commit -m "Add GitHub Actions deploy workflow"`
  - [ ] `git push`

---

### 5️⃣ GitHub Repository Settings

- [ ] **Enable GitHub Pages**
  - [ ] Navigate to: Repository → Settings → Pages
  - [ ] Source: Select **"GitHub Actions"** (NOT "Deploy from a branch")
  - [ ] Save changes

- [ ] **Verify Permissions**
  - [ ] Settings → Actions → General → Workflow permissions
  - [ ] Select: "Read and write permissions"
  - [ ] Check: "Allow GitHub Actions to create and approve pull requests"
  - [ ] Save

- [ ] **Review Environments (Optional)**
  - [ ] Settings → Environments
  - [ ] `github-pages` environment should auto-create
  - [ ] Can add protection rules if needed

---

### 6️⃣ Build & Test Locally

- [ ] **Install Dependencies**
  - [ ] Run: `npm install`
  - [ ] Verify all packages installed successfully
  - [ ] Check for peer dependency warnings

- [ ] **Test Development Build**
  - [ ] Run: `npm start`
  - [ ] App opens at `http://localhost:3000`
  - [ ] Test all routes work correctly
  - [ ] No console errors
  - [ ] Stop dev server: `Ctrl+C`

- [ ] **Test Production Build**
  - [ ] Run: `npm run build`
  - [ ] Build completes without errors
  - [ ] `build/` folder created
  - [ ] Check build size (should be optimized)

- [ ] **Test Production Build Locally (Optional)**
  - [ ] Install serve: `npm install -g serve`
  - [ ] Run: `npx serve -s build -l 3000`
  - [ ] Test app at `http://localhost:3000`
  - [ ] Verify routing works
  - [ ] Verify assets load correctly

---

### 7️⃣ Deploy to GitHub Pages

#### Method 1: Manual Deployment (Using gh-pages)

- [ ] **Deploy via npm script**
  - [ ] Run: `npm run deploy`
  - [ ] Wait for deployment to complete
  - [ ] Check terminal for success message
  - [ ] `gh-pages` branch created automatically

#### Method 2: Automatic Deployment (Using GitHub Actions)

- [ ] **Trigger workflow**
  - [ ] Push to main branch: `git push`
  - [ ] GitHub Actions triggers automatically

- [ ] **Monitor workflow**
  - [ ] Navigate to: Repository → Actions tab
  - [ ] Find "Deploy to GitHub Pages" workflow
  - [ ] Click on latest run
  - [ ] Monitor build job progress
  - [ ] Monitor deploy job progress
  - [ ] Wait for ✅ green checkmarks

- [ ] **Verify deployment**
  - [ ] Check workflow completes successfully
  - [ ] Note the deployment URL in workflow output

---

### 8️⃣ Post-Deployment Verification

- [ ] **Access Deployed Site**
  - [ ] Visit: `https://<USERNAME>.github.io/<REPO>/`
  - [ ] Site loads successfully
  - [ ] No blank page or errors

- [ ] **Test All Pages**
  - [ ] Home page (`/`)
  - [ ] Shop page (`/shop`)
  - [ ] Product details (`/product/:id`) - test with actual product
  - [ ] Cart page (`/cart`)
  - [ ] Checkout page (`/checkout`)
  - [ ] About page (`/about`)
  - [ ] Contact page (`/contact`)
  - [ ] Login page (`/login`)
  - [ ] Register page (`/register`)
  - [ ] Account page (`/account`)
  - [ ] Admin page (`/admin`)
  - [ ] Wishlist page (`/wishlist`)
  - [ ] 404 page (test invalid route)

- [ ] **Test Navigation**
  - [ ] All navbar links work
  - [ ] Footer links work
  - [ ] Browser back button works
  - [ ] Browser forward button works
  - [ ] Direct URL access works (type URL in address bar)
  - [ ] No 404 errors when navigating

- [ ] **Test Core Functionality**
  - [ ] Search functionality
  - [ ] Add to cart
  - [ ] Remove from cart
  - [ ] Update cart quantities
  - [ ] Add to wishlist
  - [ ] User authentication (login/register)
  - [ ] Form submissions
  - [ ] Image carousels/sliders
  - [ ] Filters and sorting (if applicable)

- [ ] **Test Responsive Design**
  - [ ] Desktop (1920px, 1440px, 1024px)
  - [ ] Tablet (768px, 834px)
  - [ ] Mobile (375px, 414px, 390px)
  - [ ] Layout adapts correctly
  - [ ] No horizontal scrolling
  - [ ] Touch interactions work (on mobile device)

- [ ] **Browser Console Checks**
  - [ ] Open Developer Tools (F12)
  - [ ] Check Console tab - no errors
  - [ ] Check Network tab - all resources load (200 status)
  - [ ] No 404 errors for CSS/JS/images
  - [ ] No mixed content warnings

- [ ] **Performance Checks**
  - [ ] Page loads within 3 seconds
  - [ ] Images load properly
  - [ ] No layout shift during load
  - [ ] Smooth animations and transitions

---

### 9️⃣ SEO & Metadata

- [ ] **Verify Meta Tags**
  - [ ] View page source
  - [ ] Title tag displays correctly
  - [ ] Meta description present
  - [ ] Favicon loads

- [ ] **Social Media Preview (Optional)**
  - [ ] Add Open Graph tags to public/index.html
  - [ ] Add Twitter Card tags
  - [ ] Test with social media preview tools

---

### 🔟 Documentation & Maintenance

- [ ] **Update README.md**
  - [ ] Add live demo link
  - [ ] Add deployment instructions
  - [ ] Update project description
  - [ ] Add screenshots (optional)

- [ ] **Create DEPLOYMENT_GUIDE.md (Optional)**
  - [ ] Document deployment process
  - [ ] Include troubleshooting tips
  - [ ] Add rollback instructions

- [ ] **Set Up Monitoring (Optional)**
  - [ ] Enable Dependabot for dependency updates
  - [ ] Set up error tracking (e.g., Sentry)
  - [ ] Monitor Google Search Console

- [ ] **Plan for Updates**
  - [ ] Test changes locally before deploying
  - [ ] Use feature branches for development
  - [ ] Merge to main to trigger deployment
  - [ ] Monitor Actions for deployment status

---

## 🐛 Common Issues & Solutions

### Issue 1: Blank Page After Deployment
**Symptoms**: Site loads but shows blank page  
**Solutions**:
- [ ] Check `homepage` field in package.json matches your repo URL
- [ ] Check browser console for errors
- [ ] Verify build folder contains files
- [ ] Check routing configuration

### Issue 2: 404 on Page Refresh
**Symptoms**: Routes work when clicking links, but fail on refresh  
**Solutions**:
- [ ] If using BrowserRouter: Implement 404.html workaround
- [ ] Or switch to HashRouter
- [ ] Verify GitHub Pages source is "GitHub Actions"

### Issue 3: Assets Not Loading (404 Errors)
**Symptoms**: CSS/JS/images return 404 errors  
**Solutions**:
- [ ] Verify `homepage` field in package.json
- [ ] Check asset paths are relative, not absolute
- [ ] Rebuild: `npm run build`
- [ ] Redeploy: `npm run deploy` or push to trigger Actions

### Issue 4: Workflow Fails
**Symptoms**: GitHub Actions workflow shows red X  
**Solutions**:
- [ ] Check Actions tab for error details
- [ ] Verify YAML syntax in deploy.yml
- [ ] Check Node version compatibility
- [ ] Verify repository permissions
- [ ] Check if build succeeds locally

### Issue 5: Changes Not Appearing
**Symptoms**: Deployed site doesn't show latest changes  
**Solutions**:
- [ ] Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Check GitHub Actions completed successfully
- [ ] Wait 1-2 minutes for CDN propagation
- [ ] Verify commit was pushed to main branch

---

## 📝 Quick Command Reference

```bash
# Local Development
npm install              # Install dependencies
npm start               # Start dev server (localhost:3000)
npm run build           # Create production build
npx serve -s build      # Test production build locally

# Version Control
git status              # Check status
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to GitHub

# Deployment
npm run deploy          # Manual deploy (gh-pages method)
git push origin main    # Trigger GitHub Actions deploy

# Troubleshooting
npm ci                  # Clean install (delete node_modules first)
npm run build -- --verbose  # Verbose build output
```

---

## ✅ Completion Checklist

- [ ] All pre-deployment steps completed
- [ ] Site successfully deployed to GitHub Pages
- [ ] All routes tested and working
- [ ] No console errors
- [ ] Responsive on all screen sizes
- [ ] Core functionality working
- [ ] README.md updated with live link
- [ ] Team notified of deployment

---

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
- [React Router Documentation](https://reactrouter.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

---

**Last Updated**: 2025-12-15  
**Project**: SPORTSEQUIP  
**Status**: Ready for Deployment
