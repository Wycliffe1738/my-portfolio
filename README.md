
 Wycliffe Masita — Professional Portfolio

A modern, responsive portfolio showcasing three professional areas:

- Software Engineering
- Disaster Management
- B2B Tech/SaaS Copywriting and Ghostwriting

Built with React, React Router, and Vite.

1. Requirements

Install the following software before getting started:

- Node.js (a current supported LTS version)
- npm (included with Node.js)
- Visual Studio Code (recommended)
- Git (optional, but recommended for deployment)

Check your Node.js and npm versions:

```bash
node -v
npm -v
```

2. Install dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

3. Run the portfolio locally

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

http://localhost:5173

4. Build for production

Run:

```bash
npm run build
```

Vite creates the production-ready website in the `dist` folder.

To preview the production build locally, run:

```bash
npm run preview
```

5. Personalize the portfolio

Before publishing:

1. Review the introduction on the Home page.
2. Update the skills to reflect your actual experience.
3. Replace sample project descriptions with real projects.
4. Add working links to your repositories, demos, research, and writing samples.
5. Replace the GitHub placeholder URL in `src/App.jsx` with your profile URL.
6. Verify your LinkedIn URL and contact information.
7. Check the website on desktop and mobile devices.

Do not present placeholder projects or achievements as completed work.

6. Deploy to Netlify

1. Push the project to a GitHub repository.
2. Sign in to Netlify and import the repository.
3. Set the build command to:

   npm run build

4. Set the publish directory to:

   dist

5. Deploy the website and test the published URL.

The `public/_redirects` file supports React Router routes on Netlify.

7. Project structure

```text
wycliffe-portfolio/
├── public/
│   └── _redirects
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```
