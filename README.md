# Brand & Component Specific Styling with style-loader

This is an approach using `style-loader` to dynamically load the minimal needed styles at runtime. It can easily be extended to use more parameters (like platform) by passing more props to resolve the correct style file.

This example uses a mixin with a common style folder, but that is an optional approach used to reduce code duplication.

## Solves
* Lazy loads only the necessary style neeeded for the used components and specific brand.
* Dynamically loads the correct files without having to specify them explicitely. The current implementation requires that there is a corresponding file for each component/brand combination, but it can be modified to have a fallback system either in the back-end or in the actual promise-chain.

## Issues
* This implementation is very vue-dependant, using the vue lifecycle to load style on-demand. While very handy for asynchronous vue components, it doesn't translate well to a twig-only approach.
* To avoid components being rendered without style, some boilerplate is needed to delay it with `v-if`