'use strict'

const weightInputElement = document.querySelector("#weight")
const heightInputElement = document.querySelector("#height")
const calculateBMIbutton = document.querySelector("#button")
const resultBMI = document.querySelector("#result")

function buttonClicked() {

    const weight = weightInputElement.value;
    const height = heightInputElement.value;
    let bmi = weight / (height * height);

    if (weight == "" || height == "") {
        alert("Please input values")
    }

    if (bmi < 18.5) {
        resultBMI.innerText = "underweight";
    } else if (bmi > 18.5 && bmi < 25) {
        resultBMI.innerText = "normal weight";
    } else if (bmi > 25 && bmi < 30) {
        resultBMI.innerText = "overweight";
    } else {
        resultBMI.innerText = "obesity";
    }
}

calculateBMIbutton.addEventListener('click', buttonClicked);



