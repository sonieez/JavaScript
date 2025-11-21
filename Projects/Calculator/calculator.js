let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-result').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}
