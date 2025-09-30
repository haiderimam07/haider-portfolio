### Portfolio Builder (React + Vite)

This is a portfolio builder web app. It lets anyone generate a personalized developer portfolio using a clean template by filling a simple form. No code changes are required to personalize.

### Features
- Landing page with “Create” CTA
- Portfolio form with:
  - Personal details: name, email, phone, location, social links (GitHub, LinkedIn, LeetCode)
  - Education: college (name, graduation year, marks), school (name, year, marks)
  - Technical skills: multi-select for programming languages, frontend, backend, databases, tools
  - About section
  - Profile picture upload (stored as a data URL in memory)
- Generated portfolio pages:
  - Side profile with avatar, name, college, and social links
  - About, Skills, Projects, Summary, and Contact sections
  - Skills and LeetCode solved count reflect the form selections and inputs

### Tech Stack
- React 18, Vite
- Tailwind CSS (utility-first styling)
- React Context for state sharing

### Getting Started
1) Install dependencies
```bash
npm install
```

2) Run the app locally
```bash
npm run dev
```
Open the printed local URL in your browser.

### Usage
1) Open the app → Landing page → Click “Create”.
2) Fill the form:
   - Choose multiple skills by clicking the selectable badges.
   - Optionally upload a profile photo.
   - Enter education details and LeetCode problems solved.
3) Submit → Your portfolio renders with the provided data.

Note: Data is held in memory (React Context). Refreshing the page will reset it.

### Configuration
- StrictMode: Enabled for development only effects; fine for production builds.
- Default data: The context starts empty so no personal info is committed.

### Deploying to GitHub Pages
If deploying to `https://username.github.io/repo-name/`, set base in `vite.config.js`:
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repo-name/'
})
```

Build and publish the `dist` folder:
```bash
npm run build
```
Use any static hosting or a GitHub Action to deploy `dist` to Pages.

### Commit & Push
```bash
git init
git add .
git commit -m "feat: portfolio builder with form, context, skills, education"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```


