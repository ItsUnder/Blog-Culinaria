let darkMode = localStorage.getItem("dark-mode");
let cookie = localStorage.getItem("cookie");
let email = localStorage.getItem("email");
let name = localStorage.getItem("name");
let password = localStorage.getItem("password");
let username = localStorage.getItem("username");
let image = localStorage.getItem("image");
let logged = localStorage.getItem("logged");

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
  }  if (email != "done") {
    document.getElementById("es").style.display = "block";
    document.getElementById("bb").style.display = "block";
    document.getElementById("html").style.overflow = "hidden";
    console.log("KABOOM");
  } if (logged === "done") {
    document.getElementById('image-slv').style.display = "block";
    document.getElementById('name-slv').style.display = "block";
    document.getElementById('btS').style.display = "none";
    document.getElementById('btL').style.display = "none";
    console.log("CHAKABOOM");
    setProfile();
  }
 }
  function unlockCookieScreen() {
    document.getElementById("cs").style.display = "none";
    document.getElementById("bb").style.display = "none";
    document.getElementById("html").style.overflow = "visible";
    localStorage.setItem("cookie", "done");
  }
  function unlockEmailScreen() {
   if(document.getElementById('emailInput').value.includes("@gmail.com" || "@yahoo.com" || ".gov") ) {
    document.getElementById("es").style.display = "none";
    localStorage.setItem("email", "done");
    console.log(document.getElementById('emailInput').value);
   } else {
    document.getElementById('emailInput').placeholder = "Coloque um email válido!";
    document.getElementById('emailInput').value = "";
   }
  } 
  function openSignScreen() {
    document.getElementById("ss").style.display = "block";
    document.getElementById("bb").style.display = "block";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("sl").style.display = "none";
  }
  function openLoginScreen() {
    document.getElementById("sl").style.display = "block";
    document.getElementById("bb").style.display = "block";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("ss").style.display = "none";
  }
  function openModifyScreen() {
    document.getElementById("sc").style.display = "block";
    document.getElementById("bb").style.display = "block";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("ss").style.display = "none";
  }
  function signSystem() {
    if(document.getElementById('emailInput2').value.includes("@gmail.com" || "@yahoo.com" || ".gov") & document.getElementById('passwordInput').value != '') {
      localStorage.setItem("name", document.getElementById('emailInput2').value);
      localStorage.setItem("password", document.getElementById('passwordInput').value);
      localStorage.setItem("logged", "done");
      document.getElementById("ss").style.display = "none";
      document.getElementById("html").style.overflow = "visible";
      document.getElementById("bb").style.display = "none";
      document.getElementById('emailInput3').value = "";
      document.getElementById('passwordInput2').value = "";
      document.getElementById('btS').style.display = "none";
      document.getElementById('btL').style.display = "none";
      openModifyScreen();
      setProfile();
    }
  }
  function loginSystem() {
    if(document.getElementById('emailInput3').value == localStorage.getItem("name") & document.getElementById('passwordInput2').value == localStorage.getItem("password")) {
      document.getElementById("sl").style.display = "none";
      document.getElementById("ss").style.display = "none";
      document.getElementById("html").style.overflow = "visible";
      document.getElementById("bb").style.display = "none";
      document.getElementById('emailInput3').value = "";
      document.getElementById('passwordInput2').value = "";
      document.getElementById('btS').style.display = "none";
      document.getElementById('btL').style.display = "none";
      localStorage.setItem("logged", "done");
      openModifyScreen();
      setProfile();
    } else {
      document.getElementById('emailInput3').placeholder = "Coloque uma conta válida!";
      document.getElementById('emailInput3').value = "";
      document.getElementById('passwordInput2').placeholder = "Coloque uma conta válida!";
      document.getElementById('passwordInput2').value = "";
    }
  }
  function modifySystem() {
    if(document.getElementById('usernameInput').value != '' & document.getElementById('imageInput').value != '') {
    localStorage.setItem("username", document.getElementById('usernameInput').value);
    localStorage.setItem("image", document.getElementById('imageInput').value);
    document.getElementById("sc").style.display = "none";
    document.getElementById("html").style.overflow = "visible";
    document.getElementById("bb").style.display = "none";
    setProfile();
    location.reload();
    } else {
      document.getElementById('imageInput').placeholder = "Coloque um link de uma imagem!";
      document.getElementById('imageInput').value = "";
    }
  }
  function setProfile() {
    document.getElementById("name-slv").innerHTML = localStorage.getItem("username");
    document.getElementById("image-slv").src = localStorage.getItem("image");
  }
  function leaveAcc() {
    document.getElementById('btS').style.display = "block";
    document.getElementById('btL').style.display = "block";
    document.getElementById('name-slv').style.display = "none";
    document.getElementById('image-slv').style.display = "none";
    document.getElementById("sc").style.display = "none";
    document.getElementById("html").style.overflow = "visible";
    document.getElementById("bb").style.display = "none";
    localStorage.setItem("logged", "nope");
  }
  function postSystem() {
    if(logged === "done") {  
    document.getElementById('cm').innerHTML =  document.getElementById('messageInput').value;
    document.getElementById('p').style.display = "block";
    document.getElementById('pp').src = localStorage.getItem("image");
    document.getElementById('pu').innerHTML = localStorage.getItem("username");
    document.getElementById('messageInput').value = '';
    } else {
      document.getElementById("errorMessage").style.display = "block";
  }
  }
  function closeWindows() {
    document.getElementById("sl").style.display = "none";
    document.getElementById("ss").style.display = "none";
    document.getElementById("sc").style.display = "none";
    document.getElementById("html").style.overflow = "visible";
    document.getElementById("bb").style.display = "none";
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
