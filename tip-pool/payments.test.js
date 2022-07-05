describe('Test submitPaymentInfo()', function() {
    beforeEach(function () {
        billAmtInput.value = '10';
        tipAmtInput.value = '2';
        submitPaymentInfo();
    });
  
    it('should increment paymentID', function () {
        expect(paymentId).toEqual(1);
    });
  
    it('should calculate tip percent correctly', function() {
        let pmtTds = document.querySelectorAll('#payment1 td');

        expect(pmtTds[2].innerText).toEqual('20%');
    });
  
    afterEach(function() {
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        document.querySelector('#paymentTable tbody').innerHTML = '';
    });
  });