# Brand & Component Specific Styling

We need a way to serve style to the client based on different parameters. We would preferably only serve the minimal styles needed, at the latest possible time. My previous attempts with [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) has been unsuccessful, as it unconditionally loads all imported styles into the document. The only work around I have found so far is creating different entry points for each brand/component combination, which is less than ideal.

This is an approach using [extract-loader](https://github.com/peerigon/extract-loader) and [file-loader](https://github.com/webpack-contrib/file-loader) to build styles for used components and specified brand. It can easily be extended to use more parameters (like platform) by passing more props to resolve the correct style file. It uses an express back-end, which is not relevant to the solution.

The server loads the manifest file and passes it as props to allow nested Vue components to resolve the correct style url. This is optional for a twig-only approach, since we already use `symfony/asset` in template files.

### Solves
* Only loads the necessary styles neeeded for the used components and specified parameters (brand, domain, platform etc).
* The same webpack config can be used for a twig-only approach. Although if you only use twig, you should probably consider not building with `webpack` at all and replace it with something like `gulp` instead.
* Using vue templates to load style on-demand is very handy for asynchronous/conditional vue components, but be advised to place at least some style in twig (like body-background) to make the loading phase less jarring for the user.

### Issues
* All style files need to be explicitely imported and uniquely named to avoid collision of resulting build files. I used {componentName}-{brand}.css.
* It is possible to dynamically import all needed combinations of style files for webpack, but not without creating additional chunks of script files that also needs to be imported for Vue to load.

## Try it out
```
npm install
```
Serve to http://localhost:8081/ (port can be changed in server/main.js)
```
npm run dev && npm run serve
```
Serve a minified production build
```
npm run build && npm run serve
```
Use the browser inspection tool to inspect sources and network requests.

## How it works
// TODO