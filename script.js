// For image 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

// For image 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");// in 1 line

// for wining logic
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}