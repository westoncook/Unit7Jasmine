
describe('Tests sumPaymentTotal',function(){
    beforeEach(() => {
        billAmtInput.value = '100';
        tipAmtInput.value = '30';
        submitPaymentInfo();
        billAmtInput.value = '200';
        tipAmtInput.value = '30';
        submitPaymentInfo();
    })

    it('should accurately total categories', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipPercent')).toEqual(45);
    })

    afterEach(() => {
        paymentId = 0
        allPayments = {};
        paymentTbody.innerHTML = ''
        for(let td of summaryTds){
            td.innerText = ''
        }
    })
})

describe('Tests for calculateTipPercent', function(){
    it('should accurately calculate tip percentages', function(){
        expect(calculateTipPercent(150,15)).toEqual(10);
        expect(calculateTipPercent(100,25)).toEqual(25);
        expect(calculateTipPercent(1237,10)).toEqual(1);
        expect(calculateTipPercent(37.50,12345.23)).toEqual(32921);
    })
})



describe('Tests with allServers',function(){
    beforeEach(function(){
        allServers = {server1: {serverName: 'server'}, server2: {serverName:'server'}};
        updateServerTable();
    })

    // appendTd()
    it('should add serverName to serverTable', function(){
        expect(document.querySelector('#serverTable tbody tr').firstElementChild.innerText).toEqual('server');
    })


    // appendDeleteBtn()
    it('should append deleteBtn to newTr', function(){
        expect(document.querySelector('#serverTable tbody tr').lastElementChild.innerText).toEqual('X');
    })

    afterEach(function(){
        allServers = {};
        updateServerTable();
    })

})