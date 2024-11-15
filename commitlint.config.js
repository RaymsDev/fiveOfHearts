export default { extends: ["@commitlint/config-conventional"],
  rules: {
  'type-enum': [
    2, // Error level: 2 = error, 1 = warning, 0 = off
    'always',
    [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
      'wip',
    ],
  ]
  }
 };
