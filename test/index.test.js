const { cesarEncode, jokerToArray, cesarVerify, cesarDecode } = require("..");

describe('Joker to array', () => { 

    test('verifie if jokerToArray return array', () => { 

        expect(jokerToArray("IDRISS")).toEqual(["I", "D", "R", "I", "S", "S"])

    })

    test('verifie if jokerToArray return an array if param is number', () => {

        expect(jokerToArray(1234)).toEqual(["1", "2", "3", "4"])

    })

    test('verifie if jokerToArray not return null', () => {

        expect(jokerToArray(true)).not.toBeNull()

    })    
    
    test('verifie if jokerToArray return null if not params provided', () => {

        expect(jokerToArray()).toBeNull()

    })

})


describe("data to cesar3", ()=>{

    test("should return def", ()=>{

        expect(cesarEncode("abc")).toEqual("def")
    })

    test("should return corect code", () => {

        expect(cesarEncode("covid")).toEqual("frylg")
    })

    test("should return null", () => {

        expect(cesarEncode()).toBeNull()
    })

    test("should return 01", () => {

        expect(cesarEncode("yz")).toEqual("12")
    })

    test("should hash <idr6ix />", () => {

        expect(cesarEncode("<idr6ix />")).toEqual("²lgv9l0|;#")
    })
})

describe("cesar3 decode", () => {

    test("should return covid", () => {

        expect(cesarDecode("frylg")).toEqual("covid")
    })

    test("should return <idr6ix />", () => {

        expect(cesarDecode("²lgv9l0|;#")).toEqual("<idr6ix />")
    })

    test("should return null", () => {

        expect(cesarDecode()).toBeNull()
    })

    test("should not return undefined", () => {

        expect(cesarDecode()).not.toBeUndefined()
    })

})

describe("cesar3 verifie", () => {

    test("should return verifie and return true", () => {

        expect(cesarVerify("frylg", "covid")).not.toBeFalsy()
    })

    test("should verifie and return true", () => {

        expect(cesarVerify("²lgv9l0|;#", "<idr6ix />")).not.toBeFalsy()
    })

    test("should verifie and return falsy", () => {

        expect(cesarVerify("lyclabaf", "$dlsrlf")).toBeFalsy()
    })

})