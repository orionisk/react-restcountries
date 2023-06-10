module.exports = {
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss/scss',
    'stylelint-config-prettier-scss'
  ],
  overrides: [
    {
      files: ['**/*.{css,scss}'],
      rules: {
        'keyframes-name-pattern': null,
        'selector-class-pattern': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'declaration-empty-line-before': ['never', { ignore: 'after-declaration' }]
      }
    }
  ]
};
