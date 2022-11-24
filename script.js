function add(a, b) {
    console.log(a + b);
    return a + b;
}

function subtract (a, b) {
    console.log(a-b);
    return a - b;
}

function multiply (a, b) {
    console.log(a*b);
    return a * b;
}

function divide (a, b){
    console.log(a/b);
    return a / b;
}

add(4,7);
subtract(6,8);
multiply(3,9);
divide(5,10);

function operate(oper, a, b){
    if (oper === "+"){
        return add(a,b);        
    }else if (oper === "-"){
        return subtract(a,b)     
    }else if (oper === "*"){
        return multiply(a,b)
    }else if(oper === "/"){
        return divide(a,b)
    };
}

operate("+", 3, 6);
operate("-", 3, 6);
operate("*", 3, 6);
operate("/", 3, 6);