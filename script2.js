// Obtener el formulario y el elemento de resultado
const currencyForm = document.getElementById('currency-form');
const resultElement = document.getElementById('result');

// Agregar evento de envío de formulario
currencyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener valores del formulario
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;

  // Realizar la conversión de divisas
  const result = convertCurrency(amount, fromCurrency, toCurrency);

  // Mostrar el resultado
  resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});

// Función para realizar la conversión de divisas (solo para fines ilustrativos)
function convertCurrency(amount, fromCurrency, toCurrency) {
  // En este ejemplo, simplemente multiplicamos el monto por un factor de conversión fijo
  const conversionRate = 1.2; // Factor de conversión ficticio
  return amount * conversionRate;
}

