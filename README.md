# @LogRock/Pebbles

Welcome to our Component Library! This is an implementation of our Asphalt Design System.

Here are some useful links:

[Documentation/Storybook](https://logrock-pebbles.netlify.app/)
[NPMJS registry](https://www.npmjs.com/package/@logrock/pebbles)

About us: https://logrock.com

## Using this library:

This library is meant to be used in Preact projects. To use it, you will have to setup your prefered Preact environment (and alias React in whatever way is more apropriate for your stack) and add a few other dependencies first:

```bash
# styled components
yarn add styled-components
yarn add styled-breakpoints

# fonts
yarn add @fontsource/archivo
```

Make the Archivo font available in your project by importing it

```js
import "@fontsource/archivo/variable-full.css";
```

If you customize the theme by changing any of the fontFamily properties, make sure that the font you want to use is also made available, by exposing it in any ways you like (fontsource is the best!)

Install this lib:

```bash
yarn add @logrock/pebbles
```

Now, wrap your app (or whatever components you plan on using this library at) with a styled-components' `ThemeProvider`, passing along a theme.

```js
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@logrock/pebbles";

const MyApp = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MyAppContent />
    </ThemeProvider>
  );
};
```

For your convenience, we currently provide a light and a dark theme that you can use and override as you see fit. Check out all it's options at [theme.ts](https://github.com/LogRock/pebbles/blob/main/lib/theme/light/theme.ts)

We also expose a `Theme` type if you use Typescript, autocomplete at will!

```ts
import { Theme } from "@logrock/pebbles";
```

And you are all set! From now on, just import and use any components you want. You can also access the theme variables using styled-components' own ThemeContext anywhere (and also as a theme prop in your custom styled components)

## Contributing

Thank you for your interest, check out [CONTRIBUTING.md](CONTRIBUTING.md) for more info.
