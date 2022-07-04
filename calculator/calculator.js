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
  document.getElementById("loan-amount").value = 20000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 5.25;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;

  const pmt = (P * i)                            //       P * i
              /                                  //   --------------
              (1 - (1 / (Math.pow(1 + i, n))));  //   1 - (1 + i)^-n

  return pmt.toFixed(2);
  // return (
  //   Math.round(
  //     (((P * i)                              //       P * i
  //       /                                    //   --------------
  //       (1 - (1 / (Math.pow(1 + i, n)))))    //   1 - (1 + i)^-n
  //       * 100)       
  //   ) / 100
  // );
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}
