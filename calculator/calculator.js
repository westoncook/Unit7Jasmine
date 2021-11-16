
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.querySelector("#loan-amount").value = 200000;
  document.querySelector("#loan-years").value = 30;
  document.querySelector("#loan-rate").value = 0.039;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const nums = getCurrentUIValues();
  let paymentString = calculateMonthlyPayment(nums);
  updateMonthly(paymentString);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(monthly) { 
  const p = monthly.amount;
  const n = monthly.years*12;
  let payment;
  if(monthly.rate === 0){
    payment = p/n;
  }
  else{
    const i = monthly.rate/100/12;
    payment = (p*i)/(1-(1+i)**-n);
  }
  let paymentString = payment.toFixed(2);
  return `$${paymentString}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
