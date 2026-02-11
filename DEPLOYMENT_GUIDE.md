# SAP UI5 to Vercel Deployment Guide

## Complete Deployment Process Documentation

**Project:** SAP UI5 Application Deployment  
**Deployment Date:** February 11, 2026  
**Final URL:** https://sap-ui-5.vercel.app  
**Repository:** https://github.com/jay-vasoya/SAP_UI5.git

---

## Table of Contents

1. [Overview](#overview)
2. [All Errors Encountered](#all-errors-encountered)
3. [Solutions Applied](#solutions-applied)
4. [Files Changed](#files-changed)
5. [Quick Reference for Next Deployment](#quick-reference-for-next-deployment)

---

## Overview

This document provides a complete record of the UI5 to Vercel deployment process, including all errors encountered, solutions applied, and a step-by-step guide for future deployments.

**Total Time:** ~3 hours  
**Total Commits:** 10  
**Files Deployed:** 68 files

---

## All Errors Encountered

### Error 1: Blank Page After Initial Deployment
**Symptom:**
- Vercel deployment successful
- Page loaded but showed blank white screen
- No console errors initially

**Root Cause:**
- Vercel was looking for files in wrong directory
- Build output not configured correctly

---

### Error 2: 404 Errors for All Resources
**Symptom:**
```
GET https://sap-ui-5.vercel.app/favicon.ico 404 (Not Found)
GET https://sap-ui-5.vercel.app/index.html 404 (Not Found)
```

**Root Cause:**
- No `public` folder configured in Vercel
- Default output directory was empty

---

### Error 3: MIME Type Errors
**Symptom:**
```
Refused to execute script from 'https://sap-ui-5.vercel.app/Component.js' 
because its MIME type ('text/plain') is not executable
```

**Root Cause:**
- Vercel serving JavaScript files as `text/plain`
- Browser refused to execute JS with wrong MIME type

---

### Error 4: Component.js 404 Errors (Critical)
**Symptom:**
```
GET https://sap-ui-5.vercel.app/Component.js net::ERR_ABORTED 404 (Not Found)
GET https://sap-ui-5.vercel.app/manifest.json 404 (Not Found)
ModuleError: failed to load 'firstapp/project1/Component.js'
```

**Root Cause:**
- Files existed in local `public/` folder
- **Only 2 of 68 files were committed to Git!**
- Component.js, manifest.json, index.html, and 40+ other files never pushed to GitHub
- Vercel can only serve files that are in the GitHub repository

---

## Solutions Applied

### Solution 1: Create Public Folder Structure
**Action:**
```bash
# Copy all webapp files to public folder
Copy-Item -Path ".\webapp\*" -Destination ".\public\" -Recurse -Force
```

**Files Affected:**
- Created new `public/` directory
- Copied all 68 files from `webapp/` to `public/`

---

### Solution 2: Simplify vercel.json
**Action:**
Removed complex headers and used minimal configuration

**File:** `vercel.json`
```json
{
  "trailingSlash": false,
  "cleanUrls": false
}
```

**Why:** Let Vercel handle MIME types automatically with default behavior

---

### Solution 3: Fix index.html Resource Roots
**Action:**
Updated bootstrap configuration to point to correct directory

**File:** `public/index.html`

**Changed from:**
```html
data-sap-ui-resource-roots='{"firstapp.project1": "./"}'
```

**Changed to:**
```html
data-sap-ui-resource-roots='{"firstapp.project1": "."}'
```

---

### Solution 4: Add ALL Missing Files to Git (CRITICAL FIX)
**Action:**
```bash
git add public/
git commit -m "Add ALL files in public folder - Component.js, manifest.json, all views, controllers, models"
git push
```

**Result:**
- Added 66 missing files to Git
- Files now available on GitHub for Vercel to deploy

**This was the final critical fix that made everything work!**

---

## Files Changed

### Configuration Files

#### 1. `vercel.json` (Root Directory)
**Purpose:** Vercel deployment configuration  
**Changes Made:** Simplified to minimal configuration  
**Final Version:**
```json
{
  "trailingSlash": false,
  "cleanUrls": false
}
```

---

#### 2. `public/index.html`
**Purpose:** Main HTML entry point  
**Changes Made:**
- Fixed resource roots path
- Added viewport meta tag
- Updated SAPUI5 CDN libraries

**Key Lines:**
```html
<script 
    id="sap-ui-bootstrap" 
    src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_horizon" 
    data-sap-ui-resource-roots='{"firstapp.project1": "."}'
    data-sap-ui-libs="sap.m,sap.tnt,sap.ui.layout,sap.viz" 
    data-sap-ui-on-init="module:sap/ui/core/ComponentSupport"
    data-sap-ui-async="true"
    data-sap-ui-xx-waitForTheme="true">
</script>
```

---

### Files Added to Git

**Total Files Added:** 66 files

#### Core Files (3)
1. `public/Component.js` - Main component initialization
2. `public/manifest.json` - Application manifest with routing
3. `public/index.html` - HTML entry point

#### Views (13)
1. `public/view/App.view.xml` - Main app shell
2. `public/view/View1.view.xml` - Home view
3. `public/view/View2.view.xml`
4. `public/view/View3.view.xml`
5. `public/view/View4.view.xml`
6. `public/view/View5.view.xml`
7. `public/view/View6.view.xml`
8. `public/view/View7.view.xml`
9. `public/view/View8.view.xml`
10. `public/view/View8Summary.view.xml`
11. `public/view/View8Table.view.xml`
12. `public/view/View8detail.view.xml`
13. `public/view/View9.view.xml`

#### Additional Views
14. `public/view/Detail.view.xml`
15. `public/view/NotFound.view.xml`
16. `public/view/Dialog.fragment.xml`
17. `public/view/MyDialog.fragment.xml`

#### Controllers (15)
1. `public/controller/App.controller.js`
2. `public/controller/View1.controller.js`
3. `public/controller/View2.controller.js`
4. `public/controller/View3.controller.js`
5. `public/controller/View4.controller.js`
6. `public/controller/View5.controller.js`
7. `public/controller/View6.controller.js`
8. `public/controller/View7.controller.js`
9. `public/controller/View8.controller.js`
10. `public/controller/View8Summary.controller.js`
11. `public/controller/View8Table.controller.js`
12. `public/controller/View8detail.controller.js`
13. `public/controller/View9.controller.js`
14. `public/controller/Detail.controller.js`
15. `public/controller/NotFound.controller.js`

#### Models (10)
1. `public/model/models.js`
2. `public/model/customer.json`
3. `public/model/view8.json`
4. `public/model/View8Table.json`
5. `public/model/products.json`
6. `public/model/Line.json`
7. `public/model/Pie.json`
8. `public/model/Area.json`
9. `public/model/Bar.json`
10. `public/model/Scatter.json`

#### CSS & i18n
1. `public/css/style.css`
2. `public/i18n/i18n.properties`

#### Test Files (6)
1. `public/test/testsuite.qunit.html`
2. `public/test/testsuite.qunit.js`
3. `public/test/unit/AllTests.js`
4. `public/test/unit/controller/View1.controller.js`
5. `public/test/unit/unitTests.qunit.html`
6. `public/test/unit/unitTests.qunit.js`

---

## Git Commits History

### Commit 1: Initial Setup
```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jay-vasoya/SAP_UI5.git
git push -u origin main
```

### Commit 2: Move vercel.json
```bash
Move-Item -Path ".\webapp\vercel.json" -Destination ".\vercel.json" -Force
git add .
git commit -m "Initial commit: UI5 project for Vercel deployment"
git push -u origin main
```

### Commit 3: Fix Vercel Deployment
```bash
git commit -m "Fix Vercel deployment: add buildCommand and outputDirectory"
git push
```

### Commit 4: Public Folder Approach
```bash
Copy-Item -Path ".\webapp\*" -Destination ".\public\" -Recurse -Force
git add public/
git commit -m "Add public folder with webapp files for Vercel deployment"
git push
```

### Commit 5: Update vercel.json
```bash
git commit -m "Update vercel.json to serve from public folder with Cache-Control"
git push
```

### Commit 6: MIME Type Fix Attempt
```bash
git commit -m "Fix MIME types: add Content-Type headers for JS and JSON files"
git push
```

### Commit 7: Simplify Configuration
```bash
git commit -m "Simplify vercel.json - let Vercel handle MIME types automatically"
git push
```

### Commit 8: Standalone App Test
```bash
git commit -m "FINAL FIX: Standalone single-file UI5 app with no local dependencies"
git push
```

### Commit 9: Restore Full App
```bash
git commit -m "Restore original full UI5 app with all views and controllers"
git push
```

### Commit 10: Add Missing Files (CRITICAL)
```bash
git add public/
git commit -m "Add ALL files in public folder - Component.js, manifest.json, all views, controllers, models"
git push
```
**Result:** ✅ Deployment Successful!

---

## Quick Reference for Next Deployment

### Prerequisites
- [ ] Node.js installed
- [ ] Git installed and configured
- [ ] GitHub account
- [ ] Vercel account

### Step-by-Step Process

#### 1. Prepare Your Project
```bash
# Navigate to your project
cd path/to/your/ui5/project

# Ensure all files are in public/ folder
# Copy from webapp if needed:
Copy-Item -Path ".\webapp\*" -Destination ".\public\" -Recurse -Force
```

#### 2. Create vercel.json (Root Directory)
```json
{
  "trailingSlash": false,
  "cleanUrls": false
}
```

#### 3. Update public/index.html
Make sure resource roots point to current directory:
```html
data-sap-ui-resource-roots='{"your.namespace": "."}'
```

#### 4. Initialize Git (If Not Already Done)
```bash
git init
git branch -M main
```

#### 5. CRITICAL: Add ALL Files to Git
```bash
# Add all files
git add .

# Verify all files are staged
git status

# Check public folder specifically
git ls-files public/

# You should see ALL your files listed!
# If not, run: git add public/ -f
```

#### 6. Commit and Push
```bash
git commit -m "Initial deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### 7. Deploy to Vercel

**Option A: Via Vercel Dashboard**
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `public`
   - Install Command: (leave empty)
5. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### 8. Verify Deployment
1. Wait 30-60 seconds for deployment
2. Open your Vercel URL
3. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Check browser console for any errors

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Not Committing All Files
**Problem:** Files exist locally but not in Git  
**Solution:** Always run `git ls-files public/` to verify

### ❌ Mistake 2: Wrong Resource Roots
**Problem:** Component.js not found  
**Solution:** Use `"."` not `"./"`  in resource roots

### ❌ Mistake 3: Complex vercel.json
**Problem:** MIME type conflicts  
**Solution:** Keep vercel.json minimal, let Vercel handle defaults

### ❌ Mistake 4: Not Using public/ Folder
**Problem:** Vercel can't find files  
**Solution:** All deployable files must be in `public/` directory

---

## Troubleshooting

### Issue: Blank Page
**Check:**
1. Browser console for errors
2. Vercel deployment logs
3. File structure in GitHub repository

**Solution:**
- Ensure `public/index.html` exists
- Verify SAPUI5 CDN is loading
- Check resource roots configuration

### Issue: Component.js 404 Error
**Check:**
```bash
# Verify file is in Git
git ls-files | grep Component.js

# Should show: public/Component.js
```

**Solution:**
```bash
git add public/Component.js
git commit -m "Add Component.js"
git push
```

### Issue: manifest.json 404 Error
**Check:**
```bash
# Verify file is in Git
git ls-files | grep manifest.json
```

**Solution:**
```bash
git add public/manifest.json
git commit -m "Add manifest.json"
git push
```

### Issue: All Files Show 404
**Solution:**
```bash
# Add entire public folder
git add public/
git commit -m "Add all public files"
git push
```

---

## File Structure Reference

```
project/
├── node_modules/           # (not deployed)
├── public/                 # ✅ DEPLOY THIS FOLDER
│   ├── Component.js        # ✅ Must be in Git
│   ├── manifest.json       # ✅ Must be in Git
│   ├── index.html          # ✅ Must be in Git
│   ├── controller/         # ✅ All files must be in Git
│   │   ├── App.controller.js
│   │   ├── View1.controller.js
│   │   └── ...
│   ├── view/               # ✅ All files must be in Git
│   │   ├── App.view.xml
│   │   ├── View1.view.xml
│   │   └── ...
│   ├── model/              # ✅ All files must be in Git
│   │   ├── models.js
│   │   ├── customer.json
│   │   └── ...
│   ├── css/
│   │   └── style.css
│   ├── i18n/
│   │   └── i18n.properties
│   └── test/
├── webapp/                 # Original source (optional backup)
├── .gitignore
├── vercel.json             # ✅ Minimal configuration
├── package.json
└── README.md
```

---

## Success Checklist

Before deploying, verify:

- [ ] All files copied to `public/` folder
- [ ] `vercel.json` exists in root with minimal config
- [ ] `public/index.html` has correct resource roots
- [ ] All files added to Git: `git add public/`
- [ ] Committed: `git commit -m "Deploy to Vercel"`
- [ ] Pushed: `git push`
- [ ] Verified files in GitHub repository web interface
- [ ] Connected GitHub to Vercel
- [ ] Configured Vercel output directory: `public`
- [ ] Deployment successful
- [ ] Tested in browser (hard refresh!)

---

## Contact & Support

**Created:** February 11, 2026  
**Last Updated:** February 11, 2026  
**Version:** 1.0

For issues or questions, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [SAPUI5 Documentation](https://sapui5.hana.ondemand.com/)

---

## Summary

**Total Errors Fixed:** 4 major issues  
**Total Files Changed:** 3 configuration files  
**Total Files Added to Git:** 66 files  
**Total Commits:** 10  
**Deployment Time:** ~3 hours  
**Final Status:** ✅ **SUCCESSFUL**

**Live URL:** https://sap-ui-5.vercel.app

---

*End of Documentation*
