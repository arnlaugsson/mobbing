const calculator = require("./index");

describe("Calculator", () => {
    it("should say two plus two are four", () => {
        expect(calculator("2+2")).toBe(4);
    });
    it("should not allow any crap", () => {
        const t = () => {
            calculator("Q123@");
        }
        expect(t).toThrow(SyntaxError);
    });
})