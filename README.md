# Agoseris

Run the app: https://erikeldridge.com/agoseris/

Status: WIP

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

### Set up

Install project dependencies:

    npm install

If using an address other than `localhost`, eg a Cloud workstation, configure
Chrome to exempt address of from HTTPS requirement for PWAs:
https://stackoverflow.com/a/53388534

### Iteration

Build assets:

    npm run build

Run the dev server:

    cd ..
    python -m SimpleHttpServer 3000

Note: to emulate Pages hosting, we run the server from the parent directory of the project.

