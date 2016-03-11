var css = require('css');
var $ = require('jquery');



var element = $(".jui-headline");
var element2 = document.getElementsByClassName("jui-headline");


var blah = css.parse('body {font-size: 20px;}', 'silent');

var cs = window.getComputedStyle(element2[0],null);

console.log(
  cs
);



