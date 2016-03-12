var visualStyles = require('list-of-visual-css-properties');
var css = require('css');
var $ = require('jquery');

var svg = $('#templateSvg')

var element = document.getElementsByClassName("jui-headline");

var computedStyles = window.getComputedStyle(element[0],null);

for (var i=0; i < visualStyles.length; i++){
  console.log(
    visualStyles[i] + ':' + computedStyles[visualStyles[i]]
  );
}


console.log(svg)

function paintSvg(){
  return '<svg\
    width="200" height="200"\
    id="templateSvg"\
    version="1.1"\
    x="0px" y="0px"\
    xml:space="preserve">\
      <text transform="matrix(1 0 0 1 127.1431 137.9048)" font-family="' + computedStyles[visualStyles[2]] + '" font-size="12">\
      I am a paragraph\
      </text>\
    </svg>';
};

$('body').append(paintSvg);