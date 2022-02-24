module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "storybook-addon-styled-component-theme/dist/preset",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/preact",
  babel: async options => ({
    ...options,
    presets: [["@babel/typescript", { jsxPragma: "h" }]],
  }),
}