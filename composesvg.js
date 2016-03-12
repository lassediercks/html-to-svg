var paint = require('paint-svg');
const camelCase = require('camelcase');

var domProperties = ['50', '200', "I am text"]

paint(
  camelCase(domProperties[2]),
  "width='" + domProperties[0] + "' height='" + domProperties[1] + "'",
  "<text y='" + domProperties[1]/2 + "'>" + domProperties[2] + "</text>")