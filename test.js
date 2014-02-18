/**
 * Created by ELatA on 14-2-18.
 */
var UglifyJS = require("uglify-js");
var fs = require("fs");

// it takes the source code to parse as first argument:
var ast = UglifyJS.parse("function sum(x, y){ return x + y }");
console.log(ast);

var filename = "app.js";
var code = fs.readFileSync(filename, "utf8");
var ast = UglifyJS.parse(code, { filename: filename, ast: ast });
console.log(ast);