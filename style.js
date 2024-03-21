
let button = document.querySelector("button");
button.addEventListener("click", function(){
    alert("You clicked me!");
    color:button("1").style.color = "red";
    h1 = "New text";
    document.querySelector("h1").innerHTML = h1;
    document.querySelector("button").style.background.color = "red";

});