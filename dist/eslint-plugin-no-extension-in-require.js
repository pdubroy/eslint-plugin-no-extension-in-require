!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.eslintPluginNoExtensionInRequire=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Copyright (c) 2015 Patrick Dubroy <pdubroy@gmail.com>
// This software is distributed under the terms of the MIT License.

'use strict';

function endswith(haystack, needle) {
  return haystack.slice(-needle.length) === needle;
}

// Returns false if `node` is a require expression where the module path
// ends with '.js'.
function checkCallExpression(node) {
  var callee = node.callee;
  if (callee.type === 'Identifier' && callee.name === 'require') {
    var path = node.arguments[0];
    if (path.type === 'Literal') {
      return !endswith(path.value, '.js');
    }
  }
  return true;
}

// Reports an AST node as a rule violation.
function report(context, node) {
  context.report(node, "require() paths should not include '.js'", {name: node.name});
}

// A plugin for ESLint that enforces that the path argument of a require()
// statement should not include the '.js' extension.
module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (!checkCallExpression(node)) {
        report(context, node);
      }
    }
  };
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZHVicm95L2Rldi9lc2xpbnQtcGx1Z2luLW5vLWV4dGVuc2lvbi1pbi1yZXF1aXJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIENvcHlyaWdodCAoYykgMjAxNSBQYXRyaWNrIER1YnJveSA8cGR1YnJveUBnbWFpbC5jb20+XG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIExpY2Vuc2UuXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZW5kc3dpdGgoaGF5c3RhY2ssIG5lZWRsZSkge1xuICByZXR1cm4gaGF5c3RhY2suc2xpY2UoLW5lZWRsZS5sZW5ndGgpID09PSBuZWVkbGU7XG59XG5cbi8vIFJldHVybnMgZmFsc2UgaWYgYG5vZGVgIGlzIGEgcmVxdWlyZSBleHByZXNzaW9uIHdoZXJlIHRoZSBtb2R1bGUgcGF0aFxuLy8gZW5kcyB3aXRoICcuanMnLlxuZnVuY3Rpb24gY2hlY2tDYWxsRXhwcmVzc2lvbihub2RlKSB7XG4gIHZhciBjYWxsZWUgPSBub2RlLmNhbGxlZTtcbiAgaWYgKGNhbGxlZS50eXBlID09PSAnSWRlbnRpZmllcicgJiYgY2FsbGVlLm5hbWUgPT09ICdyZXF1aXJlJykge1xuICAgIHZhciBwYXRoID0gbm9kZS5hcmd1bWVudHNbMF07XG4gICAgaWYgKHBhdGgudHlwZSA9PT0gJ0xpdGVyYWwnKSB7XG4gICAgICByZXR1cm4gIWVuZHN3aXRoKHBhdGgudmFsdWUsICcuanMnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFJlcG9ydHMgYW4gQVNUIG5vZGUgYXMgYSBydWxlIHZpb2xhdGlvbi5cbmZ1bmN0aW9uIHJlcG9ydChjb250ZXh0LCBub2RlKSB7XG4gIGNvbnRleHQucmVwb3J0KG5vZGUsIFwicmVxdWlyZSgpIHBhdGhzIHNob3VsZCBub3QgaW5jbHVkZSAnLmpzJ1wiLCB7bmFtZTogbm9kZS5uYW1lfSk7XG59XG5cbi8vIEEgcGx1Z2luIGZvciBFU0xpbnQgdGhhdCBlbmZvcmNlcyB0aGF0IHRoZSBwYXRoIGFyZ3VtZW50IG9mIGEgcmVxdWlyZSgpXG4vLyBzdGF0ZW1lbnQgc2hvdWxkIG5vdCBpbmNsdWRlIHRoZSAnLmpzJyBleHRlbnNpb24uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBDYWxsRXhwcmVzc2lvbjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgaWYgKCFjaGVja0NhbGxFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgICAgIHJlcG9ydChjb250ZXh0LCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuIl19
