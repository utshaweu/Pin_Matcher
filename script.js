// 1. Use common function

//Empty value
function emptyValue(id){
  document.getElementById(id).value = "";
}

//Empty text
function emptyText(id){
  document.getElementById(id).innerHTML = "";
}

// Display block
function displayBlock(id){
  document.getElementById(id).style.display = "block";
}

//Display none
function displayNone(id){
  document.getElementById(id).style.display = "none";
}

// 2. Generate random number
function generateRandomNum(){
  const randomNumber = Math.random() * 10000;
  const randomRoundNumber = Math.round(randomNumber);
  document.getElementById("inputPinValue").value = randomRoundNumber;

  emptyValue("inputTypeValue");
  displayNone("matched");
  displayNone("unmatched");
  displayNone("tryContent");

}

// 3. Input number value
function btnKey(id){
  let prevValue = document.getElementById("inputTypeValue").value;
  let key = document.getElementById(id).innerHTML;
  document.getElementById("inputTypeValue").value = prevValue + key;
}

// 4. Clean input value
function clean(){
  document.getElementById("inputTypeValue").value = "";
}

// 5. Clean last value
function cleanLast(){
  let inputResult = document.getElementById("inputTypeValue").value;
  let removeValue = inputResult.slice(0, inputResult.length - 1);
  document.getElementById("inputTypeValue").value = removeValue;
}

// 6. Submit button (Pin match or didn't match condition)
function submitBtn(){
  let randomNum = document.getElementById("inputPinValue").value;
  let typeNum = document.getElementById("inputTypeValue").value;

  // 7. Pin match condition
  if(randomNum == typeNum){
    displayBlock("matched");
    displayNone("unmatched");
    displayNone("tryContent");
  }
  else{
    displayBlock("unmatched");
    displayNone("matched");
    tryLeft("tryLeft");
    displayBlock("tryContent");
  }
}


// 8. Pin match error - try 3 left
function tryLeft(id){
  var tryAgain = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML -= 1;
  if (tryAgain == '1'){
    disableBtn("submit");
  }
}


// 9. Try left expired - submit button disabled
function disableBtn(id){
  let button = document.getElementById(id);
  button.style.cursor = "not-allowed";
  button.setAttribute( 'disable', 'true' );
  button.title = "Please reload page";
  button.style.backgroundColor = 'red';
}