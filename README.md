# v1-boilerplate

Simple boilerplate for client side apps, as opposed to my [other boilerplate](https://github.com/tomdaniels/boiler-plate) with Redux, Firebase DB, Auth intergration and testing suits.

## Out of the box?

- Webpack set up for local dev environment.
- Only requires to create React components and styling (all tooling taken care of).
- Has express server.js file for quick deployment once ready.
- Node server is set up through webpack already.

## How to use it

For the time being, you need to clone the repo and manually adjust the files. To get it runnning as is you can simply run the following commands:
```bash
git clone git@github.com:tomdaniels/v1-boilerplate.git && cd v1-boilerplate
yarn install
yarn watch
```

Then you just need to start adjusting the [app.js](https://github.com/tomdaniels/v1-boilerplate/blob/master/src/components/app.js) file, from the components directory.

_Before committing to a new repo make sure you run `rm -rf .git` and change the app [name](https://github.com/tomdaniels/v1-boilerplate/blob/master/package.json#L2)_

## Testing?

Global config [settings](https://github.com/tomdaniels/v1-boilerplate/blob/master/test/globals.js) are in place.

- Mocha
- Chai
- Enzyme

chai-enzyme package also set up so you can check for more simple things like":
`to.be.present()` where needed. 
