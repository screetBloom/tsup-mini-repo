"use strict";var __require = (x) => {
  if (typeof require !== "undefined")
    return require(x);
  throw new Error('Dynamic require of "' + x + '" is not supported');
};

// index.ts
var arr = [
  __require.resolve("vue")
];
console.log(arr[0]);
