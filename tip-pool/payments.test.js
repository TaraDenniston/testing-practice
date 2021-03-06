describe('Test functions in payments.js', function() {
    beforeEach(function () {
        billAmtInput.value = '10';
        tipAmtInput.value = '2';
        submitPaymentInfo();
    });

    it('should increment paymentId when submitPaymentInfo() is run', function () {
        expect(paymentId).toEqual(1);
    });

    it('should display bill information correctly', function() {
        let pmtTds = document.querySelectorAll('#payment1 td');

        expect(pmtTds[0].innerText).toEqual('$10');
        expect(pmtTds[1].innerText).toEqual('$2');
        expect(pmtTds[2].innerText).toEqual('20%');
    });

    it('should display summary information correctly', function() {
        billAmtInput.value = '25';
        tipAmtInput.value = '4';
        submitPaymentInfo();

        let summaryTds = document.querySelectorAll('#summaryTable td');

        expect(summaryTds[0].innerText).toEqual('$35');
        expect(summaryTds[1].innerText).toEqual('$6');
        expect(summaryTds[2].innerText).toEqual('18%');
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