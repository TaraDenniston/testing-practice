/********setup initial values**********/
describe('test setupInitialValues()', function() {
  setupIntialValues();
  let amount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;

  it('should populate default values in input fields', function() {
    expect(amount.value).toEqual(20000);
    expect(years.value).toEqual(5);
    expect(rate.value).toEqual(5.25);
  });

  it('should display monthly payment', function() {
    expect(document.getElementById("monthly-payment").value).toEqual('379.72');
  });
})

describe('test calculateMonthlyPayment()', function() {
  it('should calculate the monthly payment correctly', function() {
    expect(calculateMonthlyPayment({amount: 10000, years: 3, rate: 6})).toEqual('304.22');
    expect(calculateMonthlyPayment({amount: 120000, years: 30, rate: 4.75})).toEqual('625.98');
    expect(calculateMonthlyPayment({amount: 250000, years: 15, rate: 3.5})).toEqual('1787.21');
    expect(calculateMonthlyPayment({amount: 1235000, years: 30, rate: 5.125})).toEqual('6724.41');
  });
    
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 186282, years: 30, rate: 5})).toMatch(/\d\.\d\d$/);
  });  

  it('should throw an error when user input is invalid', function () {
    expect(() => calculateMonthlyPayment({amount: 'alkjfw', years: 5, rate: 5})).toThrowError();
    expect(() => calculateMonthlyPayment({amount: 20000, years: 'lwiwfr', rate: 5})).toThrowError();
    expect(() => calculateMonthlyPayment({amount: 20000, years: 5, rate: 'jwi j'})).toThrowError();
  })
})


/********when calculate button is clicked********* */
// should display the monthly payment 
// should display the correct format


/*********get user input*********/
// should create object properly
// should handle incorrect input


/*********update payment based on user input*********/
// should update the monthly payment correctly