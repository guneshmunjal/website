


var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuttons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

function handleclick()
{
    alert("i got clicked");
}

};



//document.querySelector("button").addEventListener("click", handleclick);

//function handleclick()
//{
  //  alert("i got clicked");
//}
