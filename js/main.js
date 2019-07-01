
	var oneBtn = document.getElementById("calc-one");
	var twoBtn = document.getElementById("calc-two");
	var threeBtn = document.getElementById("calc-three");
	var fourBtn = document.getElementById("calc-four");
	var fiveBtn = document.getElementById("calc-five");
	var sixBtn = document.getElementById("calc-six");
	var sevenBtn = document.getElementById("calc-seven");
	var eightBtn = document.getElementById("calc-eight");
	var nineBtn = document.getElementById("calc-nine");
	var zeroBtn = document.getElementById("calc-zero");
	var doubleZeroBtn = document.getElementById("double-zero");

	var plusBtn = document.getElementById("calc-plus");
	var orBtn = document.getElementById("calc-or");
	var timesBtn = document.getElementById("calc-times");
	var squareBtn = document.getElementById("calc-sqrt");
	var minusBtn = document.getElementById("calc-minus");
	var clearBtn = document.getElementById("calc-clear");
	var modulusBtn = document.getElementById("calc-mudolus");
	var divideBtn = document.getElementById("calc-divide");
	var equalsBtn = document.getElementById("calc-equals");

	var calcNumBtns = document.getElementsByClassName("calc-btn-num"); 


	var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");
	var displayValElement = document.getElementById("calc-display-val");
	var displayValAnswer = document.getElementById("calc-display-input");

	var displayVal = "0";
	var pendingVal;
	var evalStringArray = [];

	var updateDisplayVal = (clickObj) => {
		btnText = clickObj.target.innerText;

		if(displayVal ==="0")
			displayVal = "";
		displayVal+=btnText;
		displayValElement.innerText = displayVal;
	}
	var performOperation = (clickObj) =>{
		var operator =clickObj.target.innerText;
		switch(operator){
			case "+":
				pendingVal =displayVal;
				displayVal = "0";
				displayValElement.innerText = displayVal;
				evalStringArray.push(pendingVal);
				evalStringArray.push("+");
				break;

			case "-":
				pendingVal =displayVal;
				displayVal = "0";
				displayValElement.innerText = displayVal;
				evalStringArray.push(pendingVal);
				evalStringArray.push("-");
				break;
			case "x":
				pendingVal =displayVal;
				displayVal = "0";
				displayValElement.innerText = displayVal;
				evalStringArray.push(pendingVal);
				evalStringArray.push("*");
				break;
			case "/":
				pendingVal = displayVal;
				displayVal = "0";
				displayValElement.innerText = displayVal;
				evalStringArray.push(pendingVal);
				evalStringArray.push("/");
				break;
			case "%":
				pendingVal = displayVal;
				displayVal = "0";
				displayValElement.innerText = displayVal;
				evalStringArray.push(pendingVal);
				evalStringArray.push("%");
				break;
			case "^":
				pendingVal = displayVal;
				displayVal = "0";
				displayValElement.innerText = displayVal;
				evalStringArray.push(pendingVal);
				evalStringArray.push("^");
				break;
			// case "sqrt()":
			// 	pendingVal = displayVal;
			// 	displayVal = "0";
			// 	displayValElement.innerText = displayVal;
			// 	//evalStringArray.push(pendingVal);
			// 	evalStringArray.push(""+""+Math.sqrt(displayValElement.innerText)+"");
			// 	// doMath();
			// 	break;
			case "=":
				evalStringArray.push(displayVal);
				var evaluation = eval(evalStringArray.join(" "));
				displayVal = evaluation+ "";
				displayValAnswer.innerText = displayVal;
				evalStringArray = [];
			default:
				break;

		}

	}
	
	for (let i = 0; i<calcNumBtns.length; i++){
		calcNumBtns[i].addEventListener("click", updateDisplayVal,false);
	}
	for (let i = 0; i<calcOperatorBtns.length; i++) {
		calcOperatorBtns[i].addEventListener("click",performOperation,false);
	 }

	clearBtn.onclick = () => {
		displayVal ="0";
		pendingVal = undefined;
		evalStringArray = [];
		displayValElement.innerHTML = displayVal;
	};
//Get square root
squareBtn.onclick = () =>{
	pendingVal = displayValElement.innerText;
	// for (let i = 0; i<calcNumBtns.length; i++){
	// 	calcNumBtns[i].addEventListener("click", updateDisplayVal,false);}
// var inputNum1=document.form1.input1.value;
var result = Math.sqrt(pendingVal);
displayValAnswer.innerText = result;
// document.form1.answer.value = result;
};
