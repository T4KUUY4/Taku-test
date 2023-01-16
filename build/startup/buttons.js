function v0button() {
  var x = document.getElementById("v0swmotors");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}

function tridentbutton() {
  var x = document.getElementById("tridentmotors");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("bedlocatingtrident").style.display = "block";
  } 
}

function v2button() {
  var x = document.getElementById("v2motors");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("bedlocatingv2").style.display = "block";

  } 
}

function swbutton() {
  var x = document.getElementById("v0swmotors");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}

function unlockhoming() {
  var x = document.getElementById("unlockhoming");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}

function donehoming() {
  
  var x = document.getElementById("tridentmotors");
  var y = document.getElementById("v2motors");
  
  if (x.style.display === "block") {
    document.getElementById("bedlocatingtrident").style.display = "block";
  }

  if (y.style.display === "block") {
    document.getElementById("bedolcatingv2").style.display = "block";
  }
}

function donebed() {
  var x = document.getElementById("point00");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}


function done00() {
  var x = document.getElementById("tridentmotors");
  var y = document.getElementById("v2motors");
  var z = document.getElementById("v0swmotors");
  if (x.style.display === "block" || y.style.display === "block") {
    document.getElementById("startpin").style.display = "block";
  } 

  if (z.style.display === "block") {
    document.getElementById("pinv0").style.display = "block";
  }

}


function donepin() {
  document.getElementById("probetest").style.display = "block";
}