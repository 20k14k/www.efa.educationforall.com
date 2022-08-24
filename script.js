// alert("Hello !!! You are welcome to our Website .....")

alert("Now you can check new Time Table of your Classes. Click to 'Time-Table' in Navigation Menu.")

// prompt("What is your Name?", "Student")
function menuicon() {
    var menu = document.getElementById("midheader");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}
