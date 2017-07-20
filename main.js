let input = document.getElementById("display") //input / output button
let number = document.querySelectorAll(".numberClick") // number buttons
let operators = document.querySelectorAll(".operator") // operator buttons
let result = document.getElementById("equal") // equal button
let clear = document.getElementById("C") // clear button

let firstNum = 0

//add eventlistener
//display number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(event) {
    // pass event to variable
    let clicked = event.target.textContent
    // pass variable of event to display
    input.textContent += clicked
  })
}

//allow operator buttons to display
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(event) {
    operator = event.target.textContent
    //record current numbers being inputed
    firstNum = parseFloat(input.innerHTML)
    //pass variable of event to display
    input.textContent = ""
  })
}

// Clear Button needs to be functional
clear.addEventListener("click", function() {
  //click it, expect this
  input.innerHTML = "" //assign display an empty array
})

// Integrate Switch Statement to complete equations
let completeEquation = event => {
  let currentNum = parseFloat(input.textContent)

  // On Track?  console.log(`firstnum is ${firstNum} and currentNum is ${currentNum}`)

  let resultNum = 0

  switch (operator) {
    case "+":
      resultNum = firstNum + currentNum
      break

    case "-":
      resultNum = firstNum - currentNum
      break

    case "*":
      resultNum = firstNum * currentNum
      break

    case "/":
      resultNum = firstNum / currentNum
      break
    default:
      input.textContent = "Err"
  }
  console.log((input.textContent = resultNum))
}

result.addEventListener("click", completeEquation)
