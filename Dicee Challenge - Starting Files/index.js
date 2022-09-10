 var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+ randomNumber1 +".png";

var randomImageSource="images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);












var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomnumber2 +".png";

var randomImageSource2="images/"+ randomdiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomnumber2)
{
    document.querySelectorAll("h1").innerHTML="winner is player 1";

}
else if(randomnumber2>randomNumber1)
{
    document.querySelectorAll("h1").innerHTML="winner is player 2";
}
 else{
    document.querySelectorAll("h1").innerHTML="draw";
 }