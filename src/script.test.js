var {add, oper, equal} = require('./script')
 
test('First number is 5', () => {
   expect(add("5")).toBe("5")})

test('eqals', () => {
    expect(equal("5+4")).toBe("9")})
 
test('combined', () => {
    expect(oper("C")).toBe("0");
    expect(add("5")).toBe("5");
    expect(add("5")).toBe("55")
    expect(oper("+")).toBe("55+")
    expect(add("5")).toBe("55+5")
    expect(oper("-")).toBe("55+5-")
    expect(add("3")).toBe("55+5-3")
    expect(equal("55+5-3")).toBe("57")
    expect(oper("+")).toBe("57+")
}); 



