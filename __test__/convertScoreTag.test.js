import {convertScoreTag} from "../src/client/js/updateDOM"

describe("Testing Score_tag converting from labels to words", ()=>{

        test("Test convertScoreTag() with P+ should return Strong Positive", ()=> expect(convertScoreTag("P+")).toBe("Strong Positive") )

        test("Test convertScoreTag() with P should return Positive", ()=> expect(convertScoreTag("P")).toBe("Positive") )

        test("Test convertScoreTag() with NEU should return Neutral", ()=> expect(convertScoreTag("NEU")).toBe("Neutral") )

        test("Test convertScoreTag() with N should return Negative", ()=> expect(convertScoreTag("N")).toBe("Negative") )

        test("Test convertScoreTag() with N+ should return Strong Negative", ()=> expect(convertScoreTag("N+")).toBe("Strong Negative") )

        test("Test convertScoreTag() with FOO should return No polarity", ()=> expect(convertScoreTag("FOO")).toBe("No polarity") )
})