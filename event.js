// document.querySelector("button").addEventListener("click", function(){

//     alert("Hello");
// });

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
    // alert("hi")

    myVar.classList.add("style");
});

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseout", function(){
    // alert("hi")

    myVar.classList.remove("style");
});

// mul

document.querySelectorAll(".myClass")[0].addEventListener("click", function() {
var text = this.innerHTML;
document.querySelector("h1").innerHTML =  text + " is clicked" 
});

document.querySelectorAll(".myClass")[1].addEventListener("click", function() {
    var text = this.innerhtml;
    document.querySelector("h1").innerHTML =  text + "is clicked" 
    });

    document.querySelectorAll(".myClass")[2].addEventListener("click", function() {
        var text = this.innerhtml;
        document.querySelector("h1").innerHTML =  text + "is clicked" 
        });
        
    