var targetNum = 0;
var rScore = 0;
var yScore = 0;	
var gScore = 0;
var bScore = 0;

var totalScore = 0;
winScore = 0;
loseScore = 0;
startGame()
console.log("tar ", targetNum);
console.log("r ", rScore);
console.log("y ", yScore);
console.log("g ", gScore);
console.log("b ", bScore);
$(document).ready(function(){


		$("#red").on("click", function(){
			totalScore += rScore;
			compareNum();
		});

		$("#yellow").on("click", function(){
			totalScore += yScore;
			compareNum();
		});

		$("#green").on("click", function(){
			totalScore += gScore;
			compareNum();
		});

		$("#blue").on("click", function(){
			totalScore += bScore;
			compareNum();
		});
});

		

function crystalValue(){
	score = Math.floor(Math.random()*12) + 1
	return score.valueOf();
}

function startGame(){
	targetNum = 0;	
	totalScore = 0;
	$("#totalScore").html(totalScore);
	targetNum = Math.floor(Math.random() * 102) + 19;
	$("#targetNum").html(targetNum);
	rScore = crystalValue();
	yScore = crystalValue();	
	gScore = crystalValue();
	bScore = crystalValue();
}

function compareNum(){
	$("#totalScore").html(totalScore);
		if(totalScore == targetNum){
		winScore++;
		$("#win").text(winScore);
		startGame();
		
		}else if (totalScore > targetNum){
		loseScore++;
		$("#lose").text(loseScore);
		startGame();
	}
}
