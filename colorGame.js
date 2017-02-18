var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i <squares.length; i++) {
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i <squares.length; i++) {
		
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		
	}
})
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";
	messageDisplay.textContent="";
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue"
});
for (var i = 0; i<squares.length; i++){
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play again??"
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try again"
		}
	});
}

function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];	
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	for (var i = 0; i <num; i++) {
		arr.push(randomColors());
	}
	//add num random colors to the array
	//return that array
	return arr;
}

function randomColors(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
}