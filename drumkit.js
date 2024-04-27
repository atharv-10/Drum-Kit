var noOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        producesound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event)
{
    producesound(event.key);
    animation(event.key);
});
function animation(currentkey)
{
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}
function producesound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio('/JavaScript/Drum Kit Starting Files/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var crash = new Audio('/JavaScript/Drum Kit Starting Files/sounds/crash.mp3');
            crash.play();
            break;
        case "s":
            var kickbass = new Audio('/JavaScript/Drum Kit Starting Files/sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case "d":
            var snare = new Audio('/JavaScript/Drum Kit Starting Files/sounds/snare.mp3');
            snare.play();
            break;
        case "j":
            var tom2 = new Audio('/JavaScript/Drum Kit Starting Files/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('/JavaScript/Drum Kit Starting Files/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('/JavaScript/Drum Kit Starting Files/sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            break;
    }

}

