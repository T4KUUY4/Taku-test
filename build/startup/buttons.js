function testscript() {
  console.log("working");
}


function v0start() {
  var x = document.getElementById("0");
  var y = document.getElementById("00");
  x.style.display = "block";
  y.style.display = "none";
  document.getElementById("progressbar").style.display ="block";
  document.documentElement.scrollTop = 0;
  

}

var currentone = 0;
var currentprogress = 10;
var currentwidth= 10;

function moveonv0() {
  var newone = currentone + 1;

  
  var x = document.getElementById(currentone);
  var y = document.getElementById(newone);
  var progressbar = document.getElementById("progressbar");
  x.style.display = "none";
  y.style.display = "block";
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";
  currentone++

  for (var i=1;i<=10; i++) {
    currentprogress++;
  }
  /*for (var i=1;i<=10; i++) {
    currentwidth++;

  } */

  currentwidth += 9.09090909091;
  
  document.documentElement.scrollTop = 0;

}

function v0moveon2() {
  var x = document.getElementById("infostart");
  var y = document.getElementById("startverifytemp")
  x.style.display = "none";
  y.style.display = "block";
}
