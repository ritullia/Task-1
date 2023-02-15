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

document.getElementById("search").addEventListener("input", function (e) {
    let outputDiv = document.getElementById("output")
    let kg = e.target.value;

    let lb = document.createElement("p");
    lb.textContent = Math.floor(kg * 2.2046)

    outputDiv.append(lb)
})



