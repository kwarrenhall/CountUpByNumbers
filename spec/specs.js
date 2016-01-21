describe("countBy", function() {
  it("counts up by 1 and it stops at 30", function() {
    expect(countBy(1)).to.equal(30);
  });
})







// describe('vowelCheck', function() {
//   it("is true for any word that starts with a vowel", function() {
//       expect(vowelCheck("another")).to.equal(true);
//   });
//   it("is false for any word that starts with a consonant", function() {
//         expect(vowelCheck("banana")).to.equal(false);
//     });
//     it("is true for any word that starts with qu", function() {
//         expect(quCheck("question")).to.equal(true);
//     });
//     it("is true for any word that starts with an y", function() {
//         expect(yCheck("yoga")).to.equal(true);
//     });
//     it("exists if a word returns", function() {
//       expect(translate("another")).to.equal("anotheray");
//     });
//     it("parses to an array if input is a sentance", function() {
//       var parsedTest = ["a", "long", "sentence"];
//       expect(sentenceParse("a long sentence")).to.eql(parsedTest);
//     });
//
// });
