# 🌻 Pollinator Pathways Website

> [!WARNING]
> This site is a work in progress. The framework has been roughed in, but there's still a lot of work to do to build the remaining pages from the [existing website](https://www.pollinatorpathwaysproject.com/).

## How this site is built

The follow tools and frameworks are used in this website:

- [React](https://react.dev/)
  - A JavaScript library for building web components
- [NextJS](https://nextjs.org/)
  - A framework for using React for websites
- [CSS Modules](https://github.com/css-modules/css-modules)
  - An approach to writing CSS for React components
- [Tina CMS](https://tina.io/)
  - A content management system, intended to make it easier for folks who aren't into coding to edit the words and images shown on the website

## Local development

First, make sure you have [Node](https://nodejs.org/en) installed, version 18 or later. You'll need some experience with [command line interfaces](https://en.wikipedia.org/wiki/Command-line_interface) as well. Once Node is installed, [`cd`](https://en.wikipedia.org/wiki/Cd_(command)) into this project folder, and run [`npm i` to install dependencies](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager).

Once you have Node installed and have installed `package.json` dependencies with `npm i`, you can run the development command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to visit the site's local development server. To make edits to the source code of the site, you'll need to get familiar with the [frameworks used for this site](#how-this-site-is-built).

## How to edit content

Content is stored in `.json` files in the `content` folder within this project. These files can be edited and committed to version control just as any other code file might be edited.

This site uses [TinaCMS](https://pollinator-pathways-project-website.vercel.app/admin) with the intention of allowing folks who are unfamiliar with coding to edit content. This project could be set up with [Tina Cloud](https://tina.io/docs/tina-cloud/overview/). The free plan could be used with a single admin account, and credentials shared between editors, to allow anyone to edit the site from anywhere.
