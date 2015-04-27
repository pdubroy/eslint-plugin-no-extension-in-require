// Copyright (c) 2015 Patrick Dubroy <pdubroy@gmail.com>
// This software is distributed under the terms of the MIT License.

'use strict';

function startswith(haystack, needle) {
  if (Array.isArray(needle)) {
    return needle.some(function(n) { return startswith(haystack, n); });
  }
  return haystack.indexOf(needle) === 0;
}

function endswith(haystack, needle) {
  return haystack.slice(-needle.length) === needle;
}

// Returns false if `node` is a require expression where the module path
// ends with '.js'.
function checkCallExpression(node) {
  var callee = node.callee;
  if (callee.type === 'Identifier' && callee.name === 'require') {
    var pathNode = node.arguments[0];
    if (pathNode.type === 'Literal') {
      var p = pathNode.value;

      // Only check relatively-imported modules.
      if (startswith(p, ['/', './', '../'])) {
        return !endswith(p, '.js');
      }
    }
  }
  return true;
}

// Reports an AST node as a rule violation.
function report(context, node) {
  context.report(node, "require() paths should not include '.js'", {name: node.name});
}

// An ESLint rule that enforces that the path argument of a require()
// statement should not include the '.js' extension.
function noExtensionInRequire(context) {
  return {
    CallExpression: function(node) {
      if (!checkCallExpression(node)) {
        report(context, node);
      }
    }
  };
}

module.exports = {
  rules: {
    'main': noExtensionInRequire
  }
};
