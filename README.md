# Brand & Component Specific Styling

We need a way to serve style to the client based on different parameters. We would preferably only serve the minimal styles needed, at the latest possible time. My previous attempts with [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) has been unsuccessful, as the plugin unconditionally loads all imported styles into the document. The only work around I have found so far is creating different entry points for each brand/component combination, which is less than ideal.

This is an approach using [extract-loader](https://github.com/peerigon/extract-loader) and [file-loader](https://github.com/webpack-contrib/file-loader) to extract styles for used components and specified brand. This combination does exactly what we wanted from `mini-css-extract-plugin`, without automatically importing the files into the document. It can easily be extended to use more parameters (like platform) by passing more props to resolve the correct style file. It uses an `express` back-end, which is not relevant to the solution.

The server loads the manifest file and passes it as props to allow nested Vue components to resolve the correct style path. This is optional for a twig-heavy approach, since we already use the asset function in template files.

### Solves
* Only loads the necessary styles needed for the used components and specified parameters (brand, domain, platform etc).
* The same webpack config can be used for a twig-only approach. Although if you *only* use twig, you should probably consider not using `webpack` at all. You can use `gulp` to transform and bundle your style files instead.
* Using vue templates to load style on-demand is very handy for asynchronous/conditional vue components, but be advised to place at least some style in twig (like body-background) to make the loading phase less jarring for the user.

### Issues
All style files need to be explicitly imported and uniquely named to avoid collision of resulting build files. I used `import ./{componentName}-{brand}.css`. There might be a way around this.

It is possible to dynamically import all needed combinations of style files for webpack, if you want to save some lines of code. Something like:

```javascript
platforms.forEach(platform => {
  brands.forEach(brand => {
    import(`./styles/${platform}-${brand}.css`);
  });
});
```
**However**, webpack will by design create meaningless chunks of roughly 1 kB for each resulting dynamic import, that all get loaded by the main script run by the client. Even if this could be prevented, a dynamic approach could add unnecessary complexity as soon as we want to exclude some combination of all the parameters.

## Try it out
```
npm install
```
Serve to http://localhost:8081/
```
npm run dev && npm run serve port=8081
```
Serve a minified production build
```
npm run build && npm run serve
```
Stop staring at the stunning design, and use the browser inspection tool to inspect sources and page load requests.

## How it works
**webpack.config.js**
```javascript
test: /\.css$/,
use: [
  {
    loader: 'file-loader',
    options: {
      name: '[name].[contenthash].css',
    },
  },
  'extract-loader',
  'css-loader',
],
```
Webpack will traverse all entries and transform all imported files identified by the regular expression with all above loaders in reverse order. The css files must be imported in scripts imported by the entry files, or in the entry files themselves. 

`css-loader` resolves all imports within the css files and `extract-loader` will convert them into strings. `file-loader` will then save them as css-files to webpack's output directory. I also used `postcss-loader` for minification, which is optional.

**server/main.js**
```javascript
const manifest = JSON.parse(fs.readFileSync('build/manifest.json'));

res.render('index.twig', {
  brand,
  manifest,
});
```
*The actual code is obviously implementation-dependent. We can extend twig to access the entire asset manifest, or load the manifest in symfony.*

We create a manifest json file with `webpack-assets-manifest`, and can load individual asset paths to dynamically create link tags. In order to pass several style paths to vue, I chose to load the manifest in the server and pass it as props in order to include link tags. Providing them all in an object is way more manageable than providing them separately.

**vue component**
```html
<template>
  <link rel="stylesheet" text="text/css" :href="assets[`component-${this.brand}.css`]">
</template>

<script>
import './component-brand1.css';
import './component-brand2.css';

export default {
  name: 'component',
  props: {
    brand: {
      type: String,
      required: true,
    },
    assets: {
      type: Object,
      required: true,
    },
  },
};
</script>
```
I chose to place style imports in the relevant component. I then resolve the correct public path using the assets (manifest) and brand props, and include the link tag in the template.

**That's all you need!**