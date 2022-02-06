var color=generateColor(6);
var numberOfSquares=6;
var pickedColor=pickColor();
var squares=document.querySelectorAll(".square");  
var sp=document.getElementById("rdx");
var h=document.getElementById("h");
    sp.textContent=pickedColor;
var messageDisplay=document.getElementById("message");
var easyButton=document.getElementById("easy");
var hardButton=document.getElementById("hard");
var resetButton=document.querySelector("#resetbutton");

easyButton.addEventListener("click",function(){
	h.style.backgroundColor="steelblue";
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
numberOfSquares=3;
console.log(numberOfSquares);
color=generateColor(numberOfSquares);
pickedColor = pickColor();
sp.textContent=pickedColor;
	//sp.textContent=pickedColor;
for(var i=0; i<squares.length;i++)
{ 
if(color[i])
{
squares[i].style.backgroundColor=color[i];
}
else
{
squares[i].style.display="none";
}
}	//change to all the squares  
});

hardButton.addEventListener("click",function(){
	h.style.backgroundColor="steelblue";
easyButton.classList.remove("selected");
        hardButton.classList.add("selected");
numberOfSquares=6;
console.log(numberOfSquares);
color=generateColor(numberOfSquares);
pickedColor = pickColor();
sp.textContent=pickedColor;
	//sp.textContent=pickedColor;
for(var i=0; i<squares.length;i++)
{ 

squares[i].style.backgroundColor=color[i];
squares[i].style.display="block";
	
	}//change to all the squares
});

resetButton.addEventListener("click",function(){
	// generate new colors 
    h.style.backgroundColor="steelblue";
	color=generateColor(numberOfSquares);
	// pick color from array
	pickedColor = pickColor();
	sp.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color[i];
	}
	messageDisplay.textContent="";
	//change to all the squares 
	  });


for(var i=0; i<squares.length ; i++)
    {    //  adding colors to the squares
    squares[i].style.backgroundColor = color[i];
    // adding event to all the squares
    squares[i].addEventListener("click",function(){
    var clcikedcolor=this.style.backgroundColor;
    console.log(clcikedcolor+"****"+pickedColor);
    if(clcikedcolor===pickedColor)
    {
    messageDisplay.textContent= "correct";
    changeColor(clcikedcolor);
    h.style.backgroundColor=clcikedcolor;
    resetButton.textContent="play again!";
    }
    else
    {
    this.style.backgroundColor= "#232323";
    messageDisplay.textContent= "try again"
    }
    });
}

function changeColor(colors){
	
	for (var i=0; i<squares.length ;i++)
	{
		squares[i].style.background = colors;

	}
}


function pickColor(){
	var random=Math.floor(Math.random() * color.length);
	return color[random];
}

function generateColor(num){
	// make an array
	//add num random colors to array
	//return the array
	var arr=[];
	for (var i=0;i<num;i++)
	{
		//get random color and push in array
		arr.push(randomColor());
	} 
return arr;
}

function randomColor(){
	// pick red,blue,green
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random()* 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b + ")";

}