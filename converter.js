function validateInput() {
    const temperatureInput = document.getElementById('temperature');
    const errorSpan = document.getElementById('error');
    const temperatureValue = temperatureInput.value.trim();

    if (isNaN(temperatureValue) || temperatureValue === '') {
        errorSpan.textContent = 'Please enter a valid number.';
    } else {
        errorSpan.textContent = ''; // Clear any previous error message.
    }
}

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');

    let result = 0;
    let explanation = '';

    if (fromUnit === 'celsius') {
        result = {
            celsius: temperature,
            fahrenheit: (temperature * 9/5) + 32,
            kelvin: temperature + 273.15,
            rankine: (temperature + 273.15) * 9/5
        };

        explanation = 'To convert Celsius to Fahrenheit, use the formula: F = (C × 9/5) + 32. To convert to Kelvin, simply add 273.15. For Rankine, use the formula (C + 273.15) × 9/5.';
    } else if (fromUnit === 'fahrenheit') {
        result = {
            celsius: (temperature - 32) * 5/9,
            fahrenheit: temperature,
            kelvin: (temperature - 32) * 5/9 + 273.15,
            rankine: temperature + 459.67
        };

        explanation = 'To convert Fahrenheit to Celsius, use the formula: C = (F - 32) × 5/9. For Kelvin, use the formula (F - 32) × 5/9 + 273.15. To convert to Rankine, simply add 459.67.';
    } else if (fromUnit === 'kelvin') {
        result = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9/5 + 32,
            kelvin: temperature,
            rankine: temperature * 9/5
        };

        explanation = 'To convert Kelvin to Celsius, subtract 273.15. For Fahrenheit, use the formula (K - 273.15) × 9/5 + 32. To convert to Rankine, multiply by 9/5.';
    } else if (fromUnit === 'rankine') {
        result = {
            celsius: (temperature - 491.67) * 5/9,
            fahrenheit: temperature - 459.67,
            kelvin: (temperature - 491.67) * 5/9,
            rankine: temperature
        };

        explanation = 'To convert Rankine to Celsius, use the formula: C = (R - 491.67) × 5/9. To convert to Fahrenheit, subtract 459.67. For Kelvin, use the formula (R - 491.67) × 5/9.';
    }

    resultDiv.innerHTML = `<p>Celsius: ${result.celsius}°C</p><p>Fahrenheit: ${result.fahrenheit}°F</p><p>Kelvin: ${result.kelvin}K</p><p>Rankine: ${result.rankine}°R</p>`;
    explanationDiv.innerHTML = `<p>Explanation: ${explanation}</p>`;
}