`use strict`

// IMPORT STATEMENT
import * as DOM from './Task9Dom.js';


//create element
DOM.pageButton.onclick = () => addToList(DOM.pageInput.value);

function addToList(str) {

  let child = document.createElement(`li`);
  child.innerHTML = str;
  DOM.pageList.appendChild(child);
}

//adds element
DOM.pageButton2.onclick = () => newfunc2();

function newfunc ()
{
  DOM.pageList.append("Did This Work")
}

//clears text
function newfunc2 ()
{
    DOM.pageInput.value = "";
}