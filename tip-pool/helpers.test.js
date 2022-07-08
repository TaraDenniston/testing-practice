describe('Test functions in helpers.js', function() {
  beforeEach(function () {
    billAmtInput.value = '10';
    tipAmtInput.value = '2';
    submitPaymentInfo();
    billAmtInput.value = '25';
    tipAmtInput.value = '6';
    submitPaymentInfo();
  });

  it('should add bills correctly', function () {
    let billTotal = sumPaymentTotal('billAmt');
    expect(billTotal).toEqual(35);
  });

  it('should add tips correctly', function () {
    let tipTotal = sumPaymentTotal('tipAmt');
    expect(tipTotal).toEqual(8);
  });

  it('should calculate tip percent correctly', function () {
    let tipPercent = calculateTipPercent(35, 8);
    expect(tipPercent).toEqual(23);
  });

  afterEach(function() {
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
    document.querySelector('#paymentTable tbody').innerHTML = '';
    let summaryTds = document.querySelectorAll('#summaryTable td');
    for(key in summaryTds) {
        summaryTds[key].innerText = '';
    }
  });
});