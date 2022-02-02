`use strict`

import * as DOM from './domchallenge.js';

//create element
DOM.btnAdd.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnSub.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnDiv.onclick = () => div(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnMult.onclick = () => mult(DOM.inputOne.value, DOM.inputTwo.value);

//Add
function add (num1, num2)
{
    let ans = 0;
    ans = +num1 + +num2;
    disp(ans);
}

//subtract
function sub (num1, num2)
{
    let ans = 0;
    ans = +num1 - +num2;
    disp(ans);
}

//divide
function div (num1, num2)
{
    let ans = 0;
    ans = +num1 / +num2;
    disp(ans);
}
//multiply
function mult (num1, num2)
{
    let ans = 0;
    ans = +num1 * +num2;
    disp(ans);
}

//Adds to list
function disp(ans)
{
    let child = document.createElement(`li`);
    child.innerHTML = ans;
    DOM.output.appendChild(child);
}