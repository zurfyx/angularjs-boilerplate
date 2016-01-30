# AngularJS Boilerplate

## Features

- AngularJS
- Gulp
- Bower
- Karma
- Mocha & Chai
- SASS & CSS
- JSHint

## Bower packages set-up

- AngularJS
- Angular UI Route
- Bootstrap
- FontAwesome

## Best practises

Structure and code style inspired by:
- [johnpapa angular-styleguide](https://github.com/johnpapa/angular-styleguide)
- [kukicadnan angularjs-best-practices-directory-structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

## HOW TO start

`npm start` 
  - Installs dependencies from npm and bower
  - Generates `build/` folder from your `src/` files.
  - Starts an HTTP-Server at **localhost:8000**.
`npm test` 
  - Runs JSHint validator throughout your `src/` (excluding 3rd party libraries `src/assets/libs`)
  - Calls Karma to execute Mocha & Chai tests.

Result is saved to **build/** folder.

## HOW TO develop

`src/app/*` your Angular application code.
  - Tests have to end with `.spec.js`
  - Files path starts from app/
  - Partial .scss and .css will be merged
 
`src/assets/*`
  - `src/assets/css` General CSS scripts
  - `src/assets/img` Images
  - `src/assets/js` Non-Angular JS files
  - `src/assets/libs` 3rd party libraries (used by Bower)
  - `src/assets/scss` General SASS scripts

`src/index.html` index file.
  - All links follow their src/ path, except:
    - `app/app.js` Gulp merge of all your AngularJS files
    - `assets/css/style.css` `assets/css/style.scss.css` Gulp merge of CSS / SASS files

`tests/*` General tests files.

## Running the app in production

Everything you need is located under `build/` folder.

Run the application `npm start` to generate an update version of these files.