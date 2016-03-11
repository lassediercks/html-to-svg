var css = require('css');
var $ = require('jquery');


var element2 = document.getElementsByClassName("jui-headline");

var computedStyles = window.getComputedStyle(element2[0],null);

console.log(
  computedStyles
);



