

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
var newone = 1;

function moveonv0() {
  

 

  var x = document.getElementById(currentone);
  var y = document.getElementById(newone);
  var progressbar = document.getElementById("progressbar");
  x.style.display = "none";
  y.style.display = "block";
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";
  currentone++
  newone++
  for (var i=1;i<=10; i++) {
    currentprogress++;
  }

  currentwidth += 9.09090909091;

  
  document.documentElement.scrollTop = 0;

}


function movebackv0() {
  var currentpage = currentone ;
  var prevpage = currentone - 1;
  var progressbar = document.getElementById("progressbar");

  if (prevpage == -1) {
    console.log("here");
    console.log(currentpage);
    console.log(prevpage);
    document.getElementById("00").style.display="block";
    document.getElementById("0").style.display = "none";
  }

  var x = document.getElementById(currentpage);
  var y = document.getElementById(prevpage);
  x.style.display = "none";
  y.style.display = "block";

  for (var i=1;i<=10; i++) {
    currentprogress--;
  }
  




  currentwidth -= 9.09090909091;
  
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";


  currentone--;
  newone--;


  
}
