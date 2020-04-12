import { expect } from "chai"
import { RepeatedWords }from "../src/utility"

describe("Can find duplicate words ", () => {
  describe("Empty array when input is null/empty/has no words", () => {
    it("should return empty array of string when input is null", () => {
      
      let input = null;
      
      const words = RepeatedWords(input);
      expect(words).to.be.an('array').that.is.empty;
    })
    it("should return empty array of string when input is empty string", () => {
      
      let input = "";
      
      const words = RepeatedWords(input);
      expect(words).to.be.an('array').that.is.empty;
    })
  })  
})

describe("Get repeated words from paragraph", () => {
  it("should return repeated words array", () => {
    
    let input = `In a village of La Mancha, the name of which I have no desire to call to
    mind, there lived not long since one of those gentlemen that keep a lance
    in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing.An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    on Sundays, made away with three - quarters of his income`;
    
    const words = RepeatedWords(input);
    expect(words.length).to.equal(3);
    expect(words[0],`first word: ${words[0]}`).to.equal("a");
    expect(words[1],`second word: ${words[1]}`).to.equal("of");
    expect(words[2], `Third word: ${words[2]}`).to.equal("on");
    console.log(`repeated words are: ${words[0]}, ${words[1]}, ${words[2]}`)
  })
})