'use strict';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  'type-enum': [2, 'always', ['init', 'feat', 'chore', 'fix', 'docs']],
};
