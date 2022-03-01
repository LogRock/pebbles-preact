module.exports = async ({ config }) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    react: "preact/compat",
    "react-dom/test-utils": "preact/test-utils",
    "react-dom": "preact/compat", // Must be below test-utils
    "react/jsx-runtime": "preact/jsx-runtime",
  });
  return config;
};
