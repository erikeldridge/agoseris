# Agoseris

Run the app: https://erikeldridge.com/agoseris/

## Develop

### Project structure

This repo largely adheres to conventions from
[Google's PWA codelabs](https://codelabs.developers.google.com/dev-pwa-training/).

This app is hosted on GitHub Pages, which requires an `index.html` at the root
(or in a directory called `docs`, but that'd be even more confusing).

For the PWA service worker to be in scope, it must be in the same directory
as `index.html`.

Any resources with a build step are sourced from the `src` directory and built
into the root directory using commands in `gulpfile.js`.

### Set up

Install 
[gulp-cli](https://gulpjs.com/docs/en/getting-started/quick-start#install-the-gulp-command-line-utility)
for building assets:

    npm install gulp-cli --global

Install project dependencies:

    npm install

If using an address other than `localhost`, eg a Cloud workstation, configure
Chrome to exempt address of from HTTPS requirement for PWAs:
https://stackoverflow.com/a/53388534

### Iteration

Start dev server and watch for changes (using 
[Browsersync](https://browsersync.io/)):

    gulp buildAndServe

