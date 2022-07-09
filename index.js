// detecting Button press


// finding the length of the array containing the elements with the class="drum"
var noOfButttons = document.querySelectorAll(".drum").length;

// running a loop from element 0 to the last element of the array, checking if the current looping element is clicked or not, if it is clicked then executing the anonymous function
for (var i = 0; i < noOfButttons; i++) {
    // addEventListener here 'listens' if the mouse is clicked on the current looping button, if it is clicked the anonymous function is executed
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // 'this' keyword gives the current Object, in this case the current clicked button object
        // this.style.color = "#2FA4FF"; // in this way we can change the color of the pressed button if we want
        var buttonValue = this.innerHTML; // extracting the text inside the pressed button element
        makeSound(buttonValue); //passing the extracted text of the pressed button to the makeSound function to produce the sound
        buttonAnimation(this.innerHTML);
    });
}



// ********************************************************************************************************************



// detecting keyboard press


// detecting keyboard press on the whole page(i.e. the whole HTML document)
// if key press is detected then executing the anonymous function

// the anonymous function here takes 'event' object as a parameter; this 'event' object hold the details about the event that has 
// happend, in this case the key press
// NOTE: the event object can have any name, 'event' name is not necessary
document.addEventListener("keypress", function (event) {
    makeSound(event.key); // the 'event' object has many properties, in this case finding the value of its 'key' property by using 'event.key'
    buttonAnimation(event.key);
});



// ********************************************************************************************************************



// making sound when a drum button is clicked or a key correponding to text of the drums is pressed



function makeSound(key) {
    switch (key) {
        case "w":
            // creating a new object, instrument_audio1 from the in-built Constructor function 'Audio'; this stores the information
            // of which audio file is to be played
            var instrument_audio1 = new Audio("sounds/crash.mp3");
            // the .play() function plays the specified audio file related to the given object
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



// ********************************************************************************************************************



// animation that happens when key is pressed



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); //adding the class="pressed" to the current pressed button which gives it a pressed look
    setTimeout(function () {    //setTimeout(function to be executed,time is milliseconds after which it is to be executed) 
        activeButton.classList.remove("pressed"); //removing the class="pressed" from the current pressed button to remove the pressed look
    }, 100);
}