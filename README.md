# Nitin Kashyap: Portfolio

A dynamic, no-build portfolio. All content is rendered from **`data.js`**, so you update one file and the whole site changes.

## Features
- Content-driven: skills, experience, projects, education, contact all come from `data.js`
- Live GitHub repositories section (via the public GitHub API)
- Resume holder: inline PDF preview, download button, open-in-new-tab
- Project filter by technology, dark/light theme, animated role text

## Setup (5 minutes)
1. Create a repo named `PyNitinKashyap.github.io` (or any repo name).
2. Upload everything in this folder to it.
3. Put your resume PDF at `resume/Nitin_Kashyap_Resume.pdf` (create the `resume` folder).
4. Edit `data.js`: set `github`, `linkedin`, and add `repo` links to your projects.
5. Repo **Settings → Pages → Deploy from branch → `main` / root**.
6. Your site goes live at `https://PyNitinKashyap.github.io/`.

## Run locally
```bash
python -m http.server 8000
# open http://localhost:8000
```

## Updating your resume
Replace the PDF in `resume/` with the same file name and commit. The preview and download update automatically.
