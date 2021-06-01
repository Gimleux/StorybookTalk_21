# Talk about Storybook(.js)
All the resources for my talk about Storybook.

This repository is split in two parts: presentation and app, in which in each case the corresponding can be found.  

The app is based on the [LotR API](https://github.com/gitfrosh/lotr-api/tree/release/sample-app) sample app. Using Storybook, a minimalist menu is added to it during the talk, which can be used to reload the page and store the API key (the latter, however, only the interface, without any associated logic). The state at the end of the talk can be explored via the "finished" branch.

The presentation was created with LaTeX Beamer. The used theme is [Focus](https://github.com/elauksap/focus-beamertheme).

## How to run?
Just navigate to ```app/```, install the dependencies using ```npm i``` and execute ```npm run storybook``` to start a local storybook instance for the sampler app.

## Where can I find more material on this?
A full introduction and advanced training on Storybook can be obtained through the [tutorials](https://storybook.js.org/tutorials/) at [storybook.js.org](https://storybook.js.org/). For a mastery of the same, the [documentation](https://storybook.js.org/docs/) that can also be found there is recommended.

Notes on combining Storybook with TypeScript can also be found in the [corresponding section](https://storybook.js.org/docs/react/configure/typescript) of the documentation.