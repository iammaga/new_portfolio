var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var dob = new Date(2001, 11, 8);
var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
var age;
var myAge = document.getElementById("myAge");

age = today.getFullYear() - dob.getFullYear();

if (today < dobnow) {
  age = age - 1;
}

myAge.innerHTML = age;

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function timeBegan() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("timeNow").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    timeBegan();
  }, 500);
}
timeBegan();

function openFolders() {
  var x = document.getElementById("folders");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openFrontendFolder() {
  var x = document.getElementById("frontend");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openCssFolder() {
  var x = document.getElementById("css");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openJsFolder() {
  var x = document.getElementById("js");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openBackendFolder() {
  var x = document.getElementById("backend");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openPhpFolder() {
  var x = document.getElementById("php");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openDatabaseFolder() {
  var x = document.getElementById("database");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function click() {
  var element = document.getElementById("frontend");
  element.classList.toggle("mystyle");
}

setTimeout(function () {
  document.getElementById("bg-img").style.display = "block";
  document.getElementById("start").style.display = "none";
}, 0); // 2800
