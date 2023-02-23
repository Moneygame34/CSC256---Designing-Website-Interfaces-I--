//This is the Script for MainFile1.html.
//Created by Vanessa Bonner.

//This is the function for the buttons on the main page.
function myFunction(){
    document.getElementById("Userinfo").style.display = "";
    document.getElementById("theEmail").innerText = document.getElementById("email").value;
    document.getElementById("firstName").innerText = document.getElementById("fname").value;
    document.getElementById("lastName").innerText = document.getElementById("lname").value;
    document.getElementById("Password").innerText = document.getElementById("psw").value;
}

//The function for the password when someone inputs there password.
function myFunction1() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }