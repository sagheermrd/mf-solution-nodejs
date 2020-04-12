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
