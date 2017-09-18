var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score===winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score===winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

numInput.addEventListener("change", function(){
	resetGame();
	winningScore = Number(numInput.value);
	document.querySelector("p span").textContent = numInput.value;
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}