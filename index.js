var visualStyles = require('list-of-visual-css-properties');
var css = require('css');
var $ = require('jquery');

var element = document.getElementsByClassName("h1");

var computedStyles = window.getComputedStyle(element[0],null);

for (var i=0; i < visualStyles.length; i++){
  console.log(
    visualStyles[i] + ':' + computedStyles[visualStyles[i]]
  );
}