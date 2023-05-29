var randomDiceNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice" + randomDiceNumber1;
var randomImageSource1 = "images/" + randomDiceImage1 + ".png";

document.querySelector(".img1").setAttribute("src",randomImageSource1)

var randomDiceNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomDiceNumber2;
var randomImageSource2 = "images/" + randomDiceImage2 + ".png";
document.querySelector(".img2").setAttribute("src",randomImageSource2)

if(randomDiceNumber1 > randomDiceNumber2){
    document.querySelector("h1").textContent = "Player 1 Win"
}

if(randomDiceNumber1 < randomDiceNumber2){
    document.querySelector("h1").textContent = "Player 2 Win"
}

if(randomDiceNumber1 == randomDiceNumber2){
    document.querySelector("h1").textContent = "Draw"
}
