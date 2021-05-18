window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const p1 = params.get('playerOne');
    const p2 = params.get('playerTwo');



var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

document.getElementById('para1').innerHTML = p1;
document.getElementById('para2').innerHTML = p2;

if(randomNumber1 > randomNumber2)
{ 
        
        document.getElementById('mainheading').innerHTML = (p1+" Wins");
    
}
else if(randomNumber2 > randomNumber1){
    document.getElementById("mainheading").innerHTML = (p2+" Wins");
    
}
else {
    document.getElementById("mainheading").innerHTML = "Draw!";
}

});