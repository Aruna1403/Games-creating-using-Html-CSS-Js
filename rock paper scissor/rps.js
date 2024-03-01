var cScore = 0;
var uScore = 0;
var result = "";

function play(user_Chosen)
{
	
	var computer = ["rock","paper","scissor"];
	
	var index_Of_Computer_Chosen = Math.floor(Math.random()*3);
	
	computer_Chosen = computer[index_Of_Computer_Chosen];

	
	if(user_Chosen == computer_Chosen)
	{
		result = "User & Computer Chosen Same";
	}
	else if((user_Chosen == "rock" && computer_Chosen == "scissor") || 
			(user_Chosen == "scissor" && computer_Chosen == "paper") || (user_Chosen == "paper" && computer_Chosen == "rock"))
	{
		result = "User is WINNER";	
		uScore++;
	}else
	{
		result = "Computer is WINNER";
		cScore++;
	}
	
	if(uScore == 3 || cScore == 3)
	{
		if(uScore > cScore)
		{
			result = 'User is WINNER <i class="fa-solid fa-trophy"></i> and score is: ' + uScore + "<br>";
		}else if(uScore < cScore){
			result = 'Computer is WINNER <i class="fa-solid fa-trophy"></i> and score is : ' + cScore + "<br>";
		}else{
			result = 'Match is TIE <i class="fa-regular fa-face-smile-beam"></i>'+"<br>";
		}
		resetForClearData();
	}
	
	document.getElementById("user_Choice").innerHTML = user_Chosen;
	document.getElementById("user_Score").innerHTML = uScore;
	
	document.getElementById("computer_Choice").innerHTML = computer_Chosen;
	document.getElementById("computer_Score").innerHTML = cScore;
	
	document.getElementById("result").innerHTML = result;
	
}	



function resetForClearData()
{
	uScore = 0;
	cScore = 0;
	result += "--------------- Game Ends! ---------------";
}
