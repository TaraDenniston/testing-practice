/********setup initial values**********/
describe('test setupInitialValues', function() {
  beforeAll(function() {
    setupInitialValues();
    // window.addEventListener('DOMContentLoaded', function() {
    //   setupIntialValues();
    // });
  });
  
  it('should populate defaults into input fields on DOM load'), function() {
    expect(document.getElementById("loan-amount").value).toBe(10000);
    expect(document.getElementById("loan-years").value).toEqual(6);
    expect(document.getElementById("loan-rate").value).toEqual(loan-rate);
  }

  it('should display monthly payment'), function() {
    expect(document.getElementById("monthly-payment").value).toEqual('379.72');
  }
})


/********when calculate button is clicked********* */
// should display the monthly payment 
// should display the correct format


/*********get user input*********/
// should create object properly
// should handle incorrect input


/********calculate monthly payment**********/
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
})


/*********update payment based on user input*********/
// should update the monthly payment correctly
