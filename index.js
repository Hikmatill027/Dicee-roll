const randomNumber1 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);
const randomImage = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);
const randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}
