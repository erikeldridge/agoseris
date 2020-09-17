# Agoseris

Run the app: https://erikeldridge.com/agoseris/

## Develop

### Project structure

This repo largely adheres to conventions from
[Google's PWA codelabs](https://codelabs.developers.google.com/dev-pwa-training/).

This app is hosted on GitHub Pages, which requires an `index.html` at the root
(or in a directory called `docs`). All files in a PWA must be in
[scope](https://web.dev/add-manifest/). So, files are organized like this:

* the root directory contains `index.html` and build dependencies. `index.html`
is treated like a "product landing page" linking to the app.
* the `app` directory contains all PWA components
* the `src` directory contains source files used to build assets in `app`

The project uses Gulp to manage workflows.

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

