const display = document.getElementById('display');
let num1 = "";
let num2 = "";
let op = "";

function prees(num){
    num1 += num;
    display.innerHTML = num1;
}

function setOp(key){
    op = key;
    num2 = num1;
    num1 = "";
}

function clr(){
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = "0";
}

function calculate(){
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let rec = 0;

    switch(op){
        case '/':
           rec =  a/b;
           break;
        case '*':
            rec = a*b;
            break;
        case '-':
            rec = a-b;
            break;
        case '+':
            rec = a+b;
            break;

    }

    num1 = rec;
    op = "";
    display.innerHTML = rec;
    
   
}