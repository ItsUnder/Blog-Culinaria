let darkMode = localStorage.getItem("dark-mode");
let cookie = localStorage.getItem("cookie");

function changeThemes() {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark-mode", "disabled");
  }

  }
  
  window.onload = function themeChecker() {
    if (darkMode === "enabled") {
      changeThemes();
      localStorage.setItem("dark-mode", "enabled");
    }
    if (cookie != "done") {
      document.getElementById("cs").style.display = "block";
      document.getElementById("bb").style.display = "block";
      document.getElementById("html").style.overflow = "hidden";
      console.log("BOOM");
  }
  }
  function unlockCookieScreen() {
    document.getElementById("cs").style.display = "none";
    document.getElementById("bb").style.display = "none";
    document.getElementById("html").style.overflow = "visible";
    localStorage.setItem("cookie", "done");
  }
 function moveToSubtitles(id) {
    document.getElementById(id).scrollIntoView({  block: "center", behavior: "smooth",});
  }

var ScrollFunction = function() {
   var y = window.scrollY;
   if (y >= 500) {
    document.body.classList.add("show");
    document.body.classList.remove("hide");
   } else {
    document.body.classList.add("hide");
    document.body.classList.remove("show");
   }
 };
window.addEventListener("scroll", ScrollFunction);
