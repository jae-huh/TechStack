const index = require("./index")
// @ponicode
describe("index.selectLibrary", () => {
    test("0", () => {
        let callFunction = () => {
            index.selectLibrary("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.selectLibrary(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.selectLibrary("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.selectLibrary("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.selectLibrary("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.selectLibrary(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
