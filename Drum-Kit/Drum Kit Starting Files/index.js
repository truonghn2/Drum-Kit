

//have to select the button in our html and add an event listener. when it does get clicked we can call out handleClick function
//this is only for the first button

/*document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!");
});*/

//detecting button press
//create a for loop to add an event listener to all of the buttons
//target the selector for all the elements that have a class of 'drum'
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("I got clicked!");

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
       
        

       // var audio = new Audio("./sounds/tom-1.mp3");
       // audio.play();
    });

}

//detecting keyboard press
//event listener for user typing on keyboard on the WHOLE document
//'event' as a parameter allows us to tap in to see what triggered the event
document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    //switch expression
        switch (key) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(buttonInnerHTML);
        }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //want the button to go back to normal after pressing it
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}