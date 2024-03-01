var remainingAttempts = 10;
var computer_Chosen = Math.floor(Math.random()*101);

function play()
{
	var user_Chosen = Number(document.getElementById("givenNumber").value);
	
	var result = "";
	
	if(remainingAttempts > 0)
	{
		if(user_Chosen == computer_Chosen)
		{
			result = 'Great!! you guessed it right. <i class="fa-solid fa-trophy"></i><br>PLAY AGAIN';
			document.getElementById("cgout").innerHTML = computer_Chosen;
		}else if(user_Chosen > computer_Chosen)
		{
			result = 'You guessed a greatest number! <i class="fa-solid fa-face-sad-tear"></i><br>Try again';
			remainingAttempts--;
		}else if(user_Chosen < computer_Chosen)
		{
			result = 'You guessed a lowest number! <i class="fa-solid fa-face-sad-tear"></i><br>Try again';
			remainingAttempts--;
		}
	}else
	{
		result = 'You Loss! <i class="fa-regular fa-face-frown"></i><br>Try again';
		document.getElementById("cgout").innerHTML = computer_Chosen;
	}
	
	document.getElementById("ugout").innerHTML = user_Chosen;
	
	document.getElementById("attempt").innerHTML = "You have "+ remainingAttempts +" attempts to guess the right number.";
	
	document.getElementById("output").innerHTML = result;
	
}