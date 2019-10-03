/* eslint-disable */

var heightScreen = 0;
var sizelabel = document.getElementById('theheight');
var backgroundimage = document.getElementById("container");

window.addEventListener('load', function () {
  heightScreen = window.innerHeight;
  sizelabel.innerHTML = heightScreen;
  backgroundimage .style.height = heightScreen + 'px'; 
  console.log(heightScreen);
  this.console.log(sizelabel);
  document.getElementById('demo').innerHTML = navigator.userAgent;
});




