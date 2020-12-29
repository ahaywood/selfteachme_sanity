module.exports = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "at-root",
          'layer',
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};