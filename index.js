let displayValElement = document.getElementById('calc-display-val');
let clearBtn = document.getElementById('calc-clear');
let backSpaceBtn = document.getElementById('calc-backspace');
let decimalBtn = document.getElementById('calc-decimal');
let calcNumBtns = document.getElementsByClassName('calc-num-btn');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];