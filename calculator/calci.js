let result=document.getElementById("result");
var buttons=document.querySelectorAll("button");
var resultValue="";
for (items of buttons){
	items.addEventListener("click",(e) =>{
		buttonText=e.target.innerText;
		// console.log(buttonText);
		if (buttonText=='X'){
			buttonText='*';
			resultValue+=buttonText;
			result.value=resultValue;
		}

		else if (buttonText=='C'){
			resultValue=" ";
			result.value=resultValue;
		}

		else if(buttonText=='='){
			result.value=eval(resultValue);
		}

		else{
			resultValue+=buttonText;
			result.value=resultValue;
		}
	});
};