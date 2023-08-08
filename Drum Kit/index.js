
//Detecting click
for(var i=0; i< document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var click = this.innerHTML;
        play(click);
        highlightButton(click);


    });
}
//Detecting key press
//we add it to complete document as the complete doc needs to be a listener to any key stroke
document.addEventListener("keypress", function(event){
    highlightButton(event.key);
    play(event.key);
});

function play(key) {
    switch(key) {
        case 'w':
            var aud = new Audio('/sounds/tom-1.mp3');
            aud.play();
        break;
        case 'a':
            var aud = new Audio('/sounds/tom-2.mp3');
            aud.play();
        break;
        case 's':
            var aud = new Audio('/sounds/tom-3.mp3');
            aud.play();
        break;
        case 'd':
            var aud = new Audio('/sounds/tom-4.mp3');
            aud.play();
        break;
        case 'j':
            var aud = new Audio('/sounds/crash.mp3');
            aud.play();
        break;
        case 'k':
            var aud = new Audio('/sounds/kick-bass.mp3');
            aud.play();
        break;
        case 'l':
            var aud = new Audio('/sounds/snare.mp3');
            aud.play();
        break;
    }
}

function highlightButton(alpha) {
    var active = document.querySelector("."+alpha);
    active.classList.add("pressed");

    setTimeout(function(){ active.classList.remove("pressed")}, 100);

}