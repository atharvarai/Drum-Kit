
var noOfButttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        
        var buttonValue = this.innerHTML; 
        makeSound(buttonValue); 
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key); 
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            
            var instrument_audio1 = new Audio("sounds/crash.mp3");
            instrument_audio1.play();
            break;
        case "a":
            var instrument_audio2 = new Audio("sounds/kick-bass.mp3");
            instrument_audio2.play();
            break;
        case "s":
            var instrument_audio3 = new Audio("sounds/snare.mp3");
            instrument_audio3.play();
            break;
        case "d":
            var instrument_audio4 = new Audio("sounds/tom-1.mp3");
            instrument_audio4.play();
            break;
        case "j":
            var instrument_audio5 = new Audio("sounds/tom-2.mp3");
            instrument_audio5.play();
            break;
        case "k":
            var instrument_audio6 = new Audio("sounds/tom-3.mp3");
            instrument_audio6.play();
            break;
        case "l":
            var instrument_audio7 = new Audio("sounds/tom-4.mp3");
            instrument_audio7.play();
            break;
        default:
            console.log();
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); 
    setTimeout(function () {    
        activeButton.classList.remove("pressed"); 
    }, 100);
}
