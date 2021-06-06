'use strict'
//1.
//Вариант 1.
let i = 0;
while (i <= 100) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {

    } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        i++;
        continue;
    }
    console.log(i + " простое число");
    i++;
}

//Вариант 2.
one: for (let i = 2; i <= 100; i++) {
    two: for (let n = 2; n <= i; n++) {
        if (i !== n && i % n === 0) {
            continue one;
        }
    }
    console.log(i + " простое число");
}



//2.a
const x = [100, 120, 130, 50, 100, 800];

//2.b
let sum = 0;

function countBasketPrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

countBasketPrice(x);



//3*.
for (let i = 0; i <= 9; console.log(i++)) {

}



//4*.
var x = '';

for (var i = 0; i < 20; i++) {
    x = x + 'A';
    console.log(x);
}

