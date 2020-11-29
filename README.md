# Agoseris

A playground for learning about Progressive Web Apps and Web Components.

Run the app: https://erikeldridge.com/agoseris/

Status: paused to [focus on ML](https://blog.erikeldridge.com/tag/machine-learning/)

## Develop

### Project structure

This app should be fast to load and use. With this in mind, the app adheres as
closely as possible to browser primitives.

This repo largely adheres to conventions from
[Google's PWA codelabs](https://codelabs.developers.google.com/dev-pwa-training/)
and [Polymer's PWA starter kit](https://github.com/Polymer/pwa-starter-kit).

This app is hosted on GitHub Pages, which requires an `index.html` at the root
(or in a directory called `docs`). All files in a PWA must be in
[scope](https://web.dev/add-manifest/). So, files are organized like this:

* the root directory contains `index.html` and build dependencies. `index.html`
is treated like a "product landing page" linking to the app.
* the `app` directory contains all PWA components
* the `src` directory contains source files used to build assets in `app`

A model layer abstracts app state management from view state management. This is
just the M and V in MVC. Inspired by Redux, but explores idea of reading and
writing directly to app state, and using standard event listeners to propagate
changes consistent with [Open WC's best-practices](
https://open-wc.org/developing/best-practices.html#upwards-data).

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

