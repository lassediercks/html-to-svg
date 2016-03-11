require('./node_modules/list-of-visual-css-properties/list.js');
var css = require('css');
var $ = require('jquery');

var element = document.getElementsByClassName("jui-headline");

var computedStyles = window.getComputedStyle(element[0],null);

for (var i=0; i < visualStyles.length; i++){
  console.log(
    visualStyles[i] + ':' + computedStyles[visualStyles[i]]
  );
}



