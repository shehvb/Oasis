const form = document.getElementById('converter-form');
const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const errorBox = document.getElementById('error-message');

const valCelsius = document.getElementById('val-celsius');
const valFahrenheit = document.getElementById('val-fahrenheit');
const valKelvin = document.getElementById('val-kelvin');

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}

function clearError() {
  errorBox.textContent = '';
  errorBox.classList.add('hidden');
}

function resetResults() {
  valCelsius.textContent = '-- °C';
  valFahrenheit.textContent = '-- °F';
  valKelvin.textContent = '-- K';
}

function formatNumber(num) {
  return Number.isInteger(num) ? num.toString() : parseFloat(num.toFixed(2)).toString();
}

function convertTemperature(event) {
  event.preventDefault();
  clearError();

  const rawValue = tempInput.value.trim();

  if (rawValue === '') {
    showError('Please enter a temperature value.');
    resetResults();
    return;
  }

  const numericValue = Number(rawValue);

  if (isNaN(numericValue)) {
    showError('Invalid input. Please enter a valid number.');
    resetResults();
    return;
  }

  const selectedUnit = unitSelect.value;
  let celsius, fahrenheit, kelvin;

  if (selectedUnit === 'celsius') {
    celsius = numericValue;
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;
  } else if (selectedUnit === 'fahrenheit') {
    fahrenheit = numericValue;
    celsius = (fahrenheit - 32) * 5 / 9;
    kelvin = celsius + 273.15;
  } else if (selectedUnit === 'kelvin') {
    kelvin = numericValue;
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;
  }

  if (kelvin < 0) {
    showError('Temperature cannot be below absolute zero (0 K / -273.15 °C / -459.67 °F).');
    resetResults();
    return;
  }

  valCelsius.textContent = `${formatNumber(celsius)} °C`;
  valFahrenheit.textContent = `${formatNumber(fahrenheit)} °F`;
  valKelvin.textContent = `${formatNumber(kelvin)} K`;
}

form.addEventListener('submit', convertTemperature);
tempInput.addEventListener('input', () => {
  if (!errorBox.classList.contains('hidden')) {
    clearError();
  }
});
