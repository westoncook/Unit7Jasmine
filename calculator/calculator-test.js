describe('Calculation tests', function(){
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 165000, rate: 3.87, years: 30})).toEqual('$775.42');
    expect(calculateMonthlyPayment({amount: 300000, rate: 3.19, years: 15})).toEqual('$2099.27');
  });

  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 2200.775, rate: 3, years: 3})).toEqual('$64.00');
  })

  it('should accept 0 as rate', function(){
    expect(calculateMonthlyPayment({amount: 12000, rate: 0, years: 1})).toEqual('$1000.00');
  })

  it('should accept unusually high or low rates', function(){
    expect(calculateMonthlyPayment({amount: 10000, rate: 90, years: 5})).toEqual('$759.91');
    expect(calculateMonthlyPayment({amount: 10000, rate: 0.05, years: 5})).toEqual('$166.88');
  })
})  


