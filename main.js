'use strict'

// 1.
// var a = 1, b = 1, c, d;
//      c = ++a; alert(c);           // 2 
// Использована префиксная форма записи унарного оператора инкримента, 
// в ней инкрементирование производится сразу. 
//      d = b++; alert(d);           // 1
// Использована постфиксная форма записи унарного оператора инкримента,
// в ней сначала происходит возвращение значения и только потом выполняется инкрементирование.
//      c = (2 + ++a); alert(c);      // 5
// В первом выражении а поменяло свое значение на 2, В этом выражении так же используется 
// префиксная форма записи унарного оператора инкримента а это значит а будет равно 3 --> 2 + 3 = 5.
//      d = (2 + b++); alert(d);      // 4
// Во втором выражении для b было возвращено значение и толко теперь оно увеличилось
// на 1 и стало равно 2 в этом выражении так же используется постфиксная форма записи 
// унарного оператора инкримента поэтому будет возвращено значение 2 --> 2 + 2 = 4
//      alert(a);                    // 3
// к переменной а дважды применялся унарный оператор инкримента префиксная форма
//      alert(b);                    // 3
// к переменной b дважды применялся унарный оператор инкримента постфиксная форма
// в четвертом выражении ему было возвращено значение 2 но в этом выражении оно уже увеличось на 1.



//2.
// var a = 2;
// var x = 1 + (a *= 2);
// х будет равен: 5, так как выражение в скобке расшифровывается так: а = а * 2 то есть 2 * 2 = 4. 
// скобка имеет приоритет выполнения наивысший по этому выполняется первым затем сложение а затем оператор присваивания.



//3.
var a = +prompt('Введите либо положительное, либо отрицательное число a');
var b = +prompt('Введите либо положительное, либо отрицательное число b');

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}



//4.
var a = Math.round(Math.random() * 15);

switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(9);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
    default:
        break;
}



//5.
function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function multipl(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}



//6.
let a = 4;
let b = 5;
let c = sum;

function mathOperation(arg1, arg2, operation) {
    return operation(arg1, arg2);
}

switch (c) {
    case sum:
        console.log('сумма: ' + mathOperation(a, b, sum));
        break;
    case sub:
        console.log('разниц: ' + mathOperation(a, b, sub));
        break;
    case multipl:
        console.log('произведение: ' + mathOperation(a, b, multipl));
        break;
    case div:
        console.log('деление: ' + mathOperation(a, b, div));
        break;
    default:
        break;
}



//7.*
let x = 0;
let y = null;

if (x == y) {
    console.log('равны');
} else {
    console.log('не равны');
}

//ответ: не равны, сравнеие этих переменных дает false, Значения null и undefined равны друг другу, 
//но не чему бы то ни было еще. Это жесткое правило прописано в спецификации языка.



//8.*
function power(val, pow) {
    if (pow < 1) return 1;
    return val * power(val, pow - 1);
}

console.log(power(3, 4))
