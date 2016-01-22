
//one describe per function

describe("countUp",function(){
  it("will count up to 30 by increments of 5", function() {
    expect(countUp(30, 5)).to.eql([5,10,15,20,25,30]);
  });

  it("will count up to 30 by increments of 5", function() {
    expect(countUp(1, 5)).to.eql([1,2,3,4,5]);
  });
}):

describe("divisibleBy3",function(){
  it("checks numbers divisible by 3", function(){
    expect(divibleBy3(3).to.eql(true);
  });
});

//   describe("divisibleBy5",function(){
//     it("checks numbers divisible by 3", function(){
//       expect(divibleBy3(5).to.eql(true);
//     });
//
// });
