# react-boilerplate

**DEPRECATED** Please use the [generator](https://www.npmjs.com/package/generator-td-react-boilerplate)

## Out of the box?

- Webpack set up for local dev environment.
- Only requires to create React components and styling (all tooling taken care of).
- Has express server.js file for quick deployment once ready.
- Node server is set up through webpack already.

```
.
├── public
│   ├── dist
│   │   └── // webpack bundled code
│   ├── images
│   │   └── // static images
│   └── index.html
├── server
│   └── server.js
├── src
│   ├── js
│   │   ├── components
│   │   │   └── landing.js
│   │   └── app.js
│   └── scss
│       ├── general
│       │    ├── general.js
│       │    └── settings.scss
│       ├── partials
│       │   ├── // component styles go here
│       │   └── landing.js
│       └── styles.scss
├── test
│   ├── components
│   │   └── landing.js
│   ├── globals.js
│   └── mocha.opts
├── .babelrc
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── package.json
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── webpack.config.js
└── yarn.lock
```

## How to use it

First, install [Yeoman](http://yeoman.io) and [generator-td-react-boilerplate](https://www.npmjs.com/package/generator-td-react-boilerplate) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-td-react-boilerplate
```

Then generate your new project:

```bash
yo td-react-boilerplate
```
### Development

- PR's are welcomed! :)

To get it runnning, just clone the repo and fire the below:
```bash
yarn install
yarn watch
```

## Testing?

Global config [settings](https://github.com/tomdaniels/react-boilerplate/blob/master/test/globals.js) are in place.

- Mocha
- Chai
- Enzyme

chai-enzyme package also set up so you can check for more simple things like:
`to.be.present()` where needed.
