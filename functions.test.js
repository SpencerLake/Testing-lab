
const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions.js')

test("Should return the integer 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("Should return Hello, {name}", () => {
    expect(greeting('Spencer')).toEqual('Hello, Spencer')
})

test("Should display the sum of both numbers", () => {
    expect(add(2,5)).toEqual(7)
})

describe("Math answers", () => {
    test("Should display the multiplication of both numbers", () => {
        expect(multiply(10,5)).toBe(50)
        expect(multiply(2,4)).toBe(8)
    })

    test("Should show the first number divided by the second", () => {
        expect(divide(10,5)).toBe(2)
        expect(divide(8,2)).toBe(4)
    })

    test("Should show the difference of both numbers", () => {
        expect(subtract(7,2)).toBe(5)
        expect(subtract(13,5)).toBe(8)
    })
})