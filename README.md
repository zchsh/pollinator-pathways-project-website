This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next Steps

- [x] Proof of concept for `Subscribe to newsletter` type functionality
  - API endpoint to receive a request, POST new subscriber... for now, to val.town
  - Front-end component to send new subscriber request to backend (POST most likely)
- [x] Build out super basic email susbcribe form
- [ ] Build out home page, with editing facets
  - [ ] Mock up in Figma, split up into components
  - [ ] Proof of concept for video inclusion - video downloaded in Obsidian... maybe possible to upload through TinaCMS media library?
  - [ ] Ensure all proof-of-concepts are accounted for
  - [ ] Build out `NavBar` component to match current site
- [ ] Build out decent-looking `Under Construction` view, to use on all other views
- [ ] Build out `/blog` in more detail, with content authoring
  - Content authoring feels like a key part of the experience for folks running the project
- [ ] Get `Visual Editing` working for a _new_ blog post
  - Is this possible? Or maybe should have `Publish` toggle as part of the model or something?

## Updates

### 2024-05-12 - got the project kickstarted

- [x] Get `Visual Editing` working for individual blog posts
- [x] Set up `Tina Cloud` so that you can edit without running things locally
  - In other words, `/admin/index.html` should work off the [current deploy](https://pollinator-pathways-project-website.vercel.app/)
- [x] Fix issues with failed deploys as of 2024-05-12 at 18:15
  - Currently failing due to NextJS API route typing issues... maybe other issues beyond that, have yet to fully debug
- [x] Get `Visual Editing` working for some trivial content on the home page
- [x] Proof of concept for photo-gallery type page

## Tech Stack

> 🚧 TODO: write some more detailed beginner-friendly documentation on the
> tooling in this codebase.

- [React](https://react.dev/)
  - A JavaScript library for building web components
- [NextJS](https://nextjs.org/)
  - A framework for using React for websites
- [CSS Modules](https://github.com/css-modules/css-modules)
  - An approach to writing CSS for React components
- [Tina CMS](https://tina.io/)
  - A content management system, intended to make it easier for folks who aren't into coding to edit the words and images shown on the website

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
