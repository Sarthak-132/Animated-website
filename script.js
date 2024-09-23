const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


// for diplay block and none
var  elemContainer = document.querySelector("#hover-container");
var  fixed = document.querySelector("#fixed-image");

elemContainer.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})

elemContainer.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})



// for image diplay for each hover 

var hover_Eff = document.querySelectorAll(".hover-effect");

hover_Eff.forEach(function(image){
    image.addEventListener("mouseenter", function(){
        var img = image.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${img})`;
    })
})