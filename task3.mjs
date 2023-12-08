function calculateBmi(weight, height) {

    let status = bmi = weight / (height) ** 2

    if (bmi >= 30) {
        status = 'obese'
    }

    else if (bmi > 25 && bmi < 30) {
        status = 'overweight'
    }

    else if (bmi >= 18.5 && bmi < 25) {
        status = 'normal'
    }

    else {
        status = 'underweight'
    }

    console.log("You are", status, bmi)
}
let weightKg = Number(prompt("Enter your weight in kg"))
let heightM = (Number(prompt("Enter your height in feet"))) / 3.3
calculateBmi(weightKg, heightM)

