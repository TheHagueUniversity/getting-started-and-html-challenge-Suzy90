var today  = new Date();

var dateDisplay = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
document.getElementById('dateToday').innerHTML = dateDisplay;


function displayTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  hours = twoDigits(hours);
  minutes = twoDigits(minutes);
  seconds = twoDigits(seconds);
  var color = "";
  var style = mouseOut(style);
  var style = mouseOver(style);



  document.getElementById('clock').innerHTML =
  hours + ":" + minutes + ":" + seconds + " " + "GMT+0200" + "  -  " + dateDisplay;
  var time = setTimeout(displayTime, 1000);

  var color = "" + hours + minutes + seconds;
  document.body.style.background = "#" + color;
}

document.getElementById("clock").onmouseover = function() {mouseOver()};
document.getElementById("clock").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("clock").style.color = "#9ffffd";
}

function mouseOut() {
  document.getElementById("clock").style.color = "red";
}




/*-------- Keep two digits on the clock ---------*/

function twoDigits(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

 

 