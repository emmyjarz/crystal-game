var targetNum = 0;
var rScore = crystalValue();
var yScore = crystalValue();	
var gScore = crystalValue();
var bScore = crystalValue();
var totalScore = 0;
winScore = 0;
loseScore = 0;
reset()
$(document).ready(function(){


		$("#red").on("click", function(){
			totalScore = totalScore + rScore;
			$("#totalScore").html(totalScore);
				if(totalScore == targetNum){
				winScore++;
				$("#win").text(winScore);
				reset();
				
				}else if (totalScore > targetNum){
				loseScore++;
				$("#lose").text(loseScore);
				reset();
				
			}
		});

		$("#yellow").on("click", function(){
			totalScore = totalScore + yScore;
			$("#totalScore").html(totalScore);
			if(totalScore == targetNum){
			console.log("win");
			}else if (totalScore > targetNum){
			console.log("lose")
			}
		});

		$("#green").on("click", function(){
			totalScore = totalScore + gScore;
			$("#totalScore").html(totalScore);
			if(totalScore == targetNum){
			console.log("win");
			}else if (totalScore > targetNum){
			console.log("lose")
			}
		});

		$("#blue").on("click", function(){
			totalScore = totalScore + bScore;
			$("#totalScore").html(totalScore);
			if(totalScore == targetNum){
			console.log("win");
			}else if (totalScore > targetNum){
			console.log("lose")
			}

	});
});

		

function crystalValue(){
	score = Math.floor(Math.random()*12) + 1
	return score.valueOf();
}
function reset(){
	targetNum = 0;	
	totalScore =0;
	$("#totalScore").html(totalScore);
	targetNum = Math.floor(Math.random() * 102) + 19;
	$("#targetNum").html(targetNum);
	crystalValue();
}
