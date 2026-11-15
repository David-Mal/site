---
title: How this site works
date: 2026-11-15
description: A desk drawn in SVG, a CRT that runs a toy language, and Markdown files in Git.
draft: false
---

The room at the top of the home page is one hand-written SVG. Nothing in it is a photo except the small framed picture on the desk. Every object in the room is also a menu item:

- the **monitor** opens the projects, and on your first visit it types and "runs" a short program in the toy language from my interpreter project;
- the **lamp** switches the room between night and day (the pill in the corner does the same);
- the **books** are the projects themselves, one spine each;
- the **robot** on the windowsill leads to work and achievements, a nod to the FTC years;
- the **phone** is how to find me online;
- the **paper airplane** flies. Click it three times.

The view out of the window is Cluj at night, with the spire of St. Michael's Church in the skyline.

## Publishing

The site is built with [Astro](https://astro.build) and hosted on Cloudflare Pages. Posts and projects are Markdown files in a Git repository. Pushing a new file to `main` rebuilds and publishes the site automatically, so there is no admin panel and no database.

Press <kbd>`</kbd> anywhere on the page if you prefer a terminal.