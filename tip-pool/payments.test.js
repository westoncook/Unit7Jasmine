//submitPaymentInfo(e)
describe('Tests with billAmt and tipAmt input',() =>{
    beforeEach(() => {
        billAmtInput.value = '100';
        tipAmtInput.value = '30';
    })

    it('should correctly update allPayments', () => {
        submitPaymentInfo();
        expect(allPayments).toEqual({
            payment1: {
                billAmt: '100',
                tipAmt: '30',
                tipPercent: 30
            }
        })
    })

    it('should create current payment object', () => {
        expect(createCurPayment()).toEqual({ 
            billAmt: '100',
            tipAmt: '30',
            tipPercent: 30,
        })
        billAmtInput.value = '';
        tipAmtInput.value = '';

    })

    it('should update payment table', () => {
        appendPaymentTable({ 
            billAmt: '100',
            tipAmt: '30',
            tipPercent: 30,
        });
        expect(paymentTbody.innerHTML).not.toEqual('');
    })

    it('should correctly update bill total in summary table', () =>{
        allPayments = {
            payment1: {
                billAmt: '100',
                tipAmt: '30',
                tipPercent: 30
            }
        }
        updateSummary();
        expect(document.querySelector('#summaryTable tbody tr td').innerText).toEqual('$100');
    })
    
    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        paymentId = 0;
        for(let td of summaryTds){
            td.innerText = ''
        }
    })
})