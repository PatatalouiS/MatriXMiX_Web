
// note that the compiled addon is placed under following path
const { Hello, Other } = require('./build/Release/addon');
const util = require('util');
const math = require('mathjs');

console.log(math.evaluate('3i'));

const deepLog = (obj) => util.inspect(obj, { showHidden: false, depth: null });

// `Hello` function returns a string, so we have to console.log it!
console.log(Hello());
console.log(deepLog(Other()));