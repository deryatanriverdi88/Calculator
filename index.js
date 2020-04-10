let displayValElement = document.getElementById('calc-display-val');
let clearBtn = document.getElementById('calc-clear');
let backSpaceBtn = document.getElementById('calc-backspace');
let decimalBtn = document.getElementById('calc-decimal');
let calcNumBtns = document.getElementsByClassName('calc-num-btn');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

const updateDisplayVal = (clickObj) => {
	let btnText = clickObj.target.innerText;
	if(displayVal === "0")
		 displayVal = '';
		 displayVal += btnText;
	   displayValElement.innerText = displayVal;
}

const performOperation = (clickObj) =>{
	let operator = clickObj.target.innerText;
	switch(operator){
		case "+":
			pendingVal = displayVal;
			displayVal = "0" ;
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("+");
			break;

		case "-":
			pendingVal = displayVal;
			displayVal = "0" ;
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("-");
			break;
		case "x":
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("*");
			break;
		case "÷":
			pendingVal = displayVal;
			displayVal = "0" ;
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("/");
			break;
		case "=":
			evalStringArray.push(displayVal);
			let evaluation = eval(evalStringArray.join(" "));
			displayVal = evaluation + "" ;
			displayValElement.innerText = displayVal;
			evalStringArray =[];
			break;

		default:
			break;
	}
}