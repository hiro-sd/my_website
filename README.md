# Personal Portfolio

Personal portfolio website for Hiroto Yoshida, a master's student at the University of Tokyo researching acoustic levitation, human-computer interaction, and user interfaces.

Live site: [https://hirotoyoshida.vercel.app](https://hirotoyoshida.vercel.app)

## Sections

- **Home** - Profile, research interests, and social links
- **About** - Personal background, interests, research field, and photos
- **Projects** - Research and personal projects with category labels, technical details, and source links where available
- **Background** - Education, publications, internships, and certifications
- **Notes** - Planned technical writing on software engineering, acoustics, and computer vision
- **Gallery** - Responsive travel gallery with captions and enlarged photo dialogs

## Features

- Responsive single-page layout for desktop and mobile
- System-aware light and dark themes
- Animated navigation and section transitions
- Interactive particle background
- Autoplaying, muted, looping project videos
- Web-optimized gallery images with accessible dialogs

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Material UI
- Framer Motion
- tsParticles
- Vercel

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. If that port is already in use, Next.js will display the alternate local URL in the terminal.

Create and verify a production build:

```bash
npm run build
npm run start
```

## Notes Drafts

The Notes cards list planned topics; they do not link to empty articles. Reusable Japanese and English Markdown outlines live in `content/notes/_template.ja.md` and `content/notes/_template.en.md`. Topic titles and related project slugs are kept in `app/data/notes.ts`. When an article is ready, add its Markdown content and a reading page before enabling its card link. MDX can be added later if an article needs interactive diagrams.

## Deployment

The site is hosted on Vercel. When the repository's `main` branch is connected to the Vercel project, pushing a new commit to `main` triggers a production deployment automatically.
