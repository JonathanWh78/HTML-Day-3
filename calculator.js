`use strict`

import * as DOM from './domchallenge.js';
//added an object to store the values of the calcs and now when the new button equals is pressed only then are they printed
let calculation = {

}

//create element
DOM.btnAdd.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnSub.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnDiv.onclick = () => div(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnMult.onclick = () => mult(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnEql.onclick = () => disp(calculation.inputOne,calculation.inputTwo,calculation.type, calculation.result);
DOM.btnClear.onclick = () => clear();
//Add
function add (num1, num2)
{
  calculation.inputOne = num1;
  calculation.inputTwo = num2;
  calculation.result=Number(num1)+Number(num2);
  calculation.type = '+';
}

//subtract
function sub (num1, num2)
{
  calculation.inputOne = num1;
  calculation.inputTwo = num2;
  calculation.result=Number(num1)-Number(num2);
  calculation.type = '-';
}

//divide
function div (num1, num2)
{
  calculation.inputOne = num1;
  calculation.inputTwo = num2;
  calculation.result=Number(num1)/Number(num2);
  calculation.type = '/';
}
//multiply
function mult (num1, num2)
{
  calculation.inputOne = num1;
  calculation.inputTwo = num2;
  calculation.result= +num1 * +num2;
  calculation.type = '*';
}

//Adds to list
function disp(num1, num2, op, ans)
{
    let tst = document.createElement(`li`);
    tst.innerHTML = num1 + "" + op + "" + num2 + "=" + ans;
    DOM.output.appendChild(tst);
    
}

//clear
function clear()
{
    DOM.inputOne.value = "";
    DOM.inputTwo.value = "";
    document.getElementById("list_output").innerHTML = "";
}