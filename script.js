function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert to meters
    const bmi = (weight / (height * height)).toFixed(2);

    
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-result').innerHTML = `Your BMI is ${bmi} (${category}).`;
}
