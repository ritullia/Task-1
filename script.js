/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
console.log("Veikia")

let calculateBtn = document.querySelector('#submit-btn');

function convertWeight() {

    let outputDiv = document.getElementById("output")
    let kg = document.getElementById("search").value
    console.log(kg)

    let lb = document.createElement("p");
    lb.classList.add("weight-text");
    lb.textContent = `lbs ${kg * 2.2046}`;

    let grams = document.createElement("p");
    grams.classList.add("weight-text");
    grams.textContent = `g ${kg / 0.0010000}`

    let oz = document.createElement("p");
    oz.classList.add("weight-text");
    oz.textContent = `oz ${kg * 35.274}`;

    outputDiv.append(lb, grams, oz)
}

calculateBtn.addEventListener("click", ((event) => {
    event.preventDefault();
    convertWeight();
}))








