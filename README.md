# Brand & Component Specific Styling with style-loader

This is an approach using `style-loader` to dynamically load the minimal needed styles at runtime. It can easily be extended to use more parameters (like platform) by passing more props to resolve the correct style file.

This example uses a mixin with a common style folder, but that is an optional approach used to reduce code duplication.

## Solves
* Lazy loads only the necessary style neeeded for the used components and specific brand (and other parameters).
* Dynamically loads the correct files without having to specify them explicitely. The current implementation requires that there is a corresponding file for each component/brand combination, but it can be modified to have a fallback system either in the back-end or in the actual promise-chain.
* Using the vue lifecycle to load style on-demand is very handy for asynchronous vue components.

## Issues
* The client cannot load the css before all scripts have been loaded and resolved.
* There is quite some boilerplate within the components to allow them to resolve the correct style at runtime.