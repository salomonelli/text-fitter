/* eslint-disable */
var elements;
function adjustHeight() {
  var newHeight = document.getElementById('height-of-box').value;
  var enlarge = document.getElementById('enlarge-opt').checked;
  document.getElementsByClassName('box-with-text')[0].style.height = newHeight;
  TextFitter.fix(elements, enlarge);
}
window.onload = function() {
  elements = document.getElementsByClassName('box-with-text');
  TextFitter.fix(elements, true);
  document.getElementById('height-of-box').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;
    if (charCode == '13') adjustHeight();
  }
};
