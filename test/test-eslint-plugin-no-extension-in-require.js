'use strict';

var linter = require('eslint').linter;
var plugin = require('..');
var test = require('tape');

test('example', function (t) {
  var code = [
      "var x = require('./problem.js')",
      "require('./ok')",
      "var also_ok = require('not_a_relative_path.js')",
      "if (something) { require('../bad.js').blah; }",
      "require('package.json');"].join(';\n');
  linter.defineRule('no-extension-in-require', plugin.rules.main);

  var failures = linter.verify(code, {rules: {'no-extension-in-require': 2}});
  t.equal(failures.length, 2, 'there are exactly two failures');

  var f1 = failures[0];
  var f2 = failures[1];
  t.equals(f1.ruleId, 'no-extension-in-require', 'ruleId is correct');
  t.equals(f2.ruleId, f1.ruleId, 'rule ids are the same');

  t.equals(f1.line, 1);
  t.equals(f1.column, 8);

  t.equals(f2.line, 4);
  t.equals(f2.column, 17);

  t.end();
});
