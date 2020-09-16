# Agoseris

This repo largely adheres to conventions from
[Google's PWA codelabs](https://codelabs.developers.google.com/dev-pwa-training/).

## Project structure

This app is hosted on GitHub Pages, which requires an index.html at the root
(or in a directory called `docs`, but that'd be even more confusing).

All other resources are sourced from the `src` directory and built into the
`build` directory using commands in `gulpfile.js`.

## Set up

Install 
[gulp-cli](https://gulpjs.com/docs/en/getting-started/quick-start#install-the-gulp-command-line-utility)
for building assets:

    npm install gulp-cli --global

Install project dependencies:

    npm install

## Develop

Start dev server and watch for changes (using 
[Browsersync](https://browsersync.io/)):

    gulp buildAndServe


