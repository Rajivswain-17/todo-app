let cal = ""
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
button.addEventListener("click", (e) => {

    if (e.target.innerHTML == "=") {
        cal = eval(cal)
        document.querySelector(".input").value = cal
        
    }
   else if (e.target.innerHTML == "C") {
        cal = ""
        document.querySelector(".input").value = cal
    }
 else {

 cal = cal + e.target.innerHTML;
  document.querySelector(".input").value = cal
 }
})
})