
var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green", "pink"]; /*colors that we want this elemnt to cycle through*/
var counter = 0;
/*Above: counter is gonna count in which position we are in the array. 
when block is red  is gonna be in position ), when counter goes to 1 the 
we gonna call this blue, when counter goes to 2 we gonna call green*/

function changeColour (){


    if (counter >= colours.length) {
        counter = 0;
    }


colourChanger.style.background = colours[counter];
counter++;

}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function () {
    
    clearInterval(myTimer);
    colourChanger.innerHTML= "Timer stopped"

};


