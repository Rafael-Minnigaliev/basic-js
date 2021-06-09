'use strict'
//1.

//Вариант с преобразованием в строку.

function objectNumber(a) {
    a = String(a);
    if (a.length > 3) {
        console.log('Число не соответствует диапозону от 0 до 999')
        return false;
    } else if (a.length === 1) {
        this.units = +(a);
    } else if (a.length === 2) {
        this.units = +(a[1]);
        this.tens = +(a[0]);
    } else {
        this.units = +(a[2]);
        this.tens = +(a[1]);
        this.hundreds = +(a[0]);
    }
}

console.log(new objectNumber(81));

//Вариант с делением по модулю на 10.

function objectNumber(x) {
    if (x > 999) {
        console.log('Число не соответствует диапозону от 0 до 999')
        return false;
    } else if (x < 10) {
        this.units = x;
    } else if (x < 100) {
        this.units = x % 10;
        this.tens = (x - (x % 10)) / 10;
    } else {
        this.units = x % 10;
        this.tens = ((x - (x % 10)) / 10) % 10;
        this.hundreds = ((x - (x % 10)) / 10 - ((x - (x % 10)) / 10) % 10) / 10;
    }
}

console.log(new objectNumber(485));



//2, 3*

const x = [
    { name: 'jersey', price: 100, color: 'white', size: 'xl', quantity: 1 },
    { name: 'cap', price: 50, color: 'red', size: 'l', quantity: 1 },
    { name: 'blouse', price: 120, color: 'dark blue', size: 'xl', quantity: 1 },
    { name: 'trousers', price: 200, color: 'black', size: 'l', quantity: 1 },
    { name: 'sneakers', price: 800, color: 'black and white', size: 42, quantity: 1 },
    { name: 'socks', price: 90, color: 'white', size: 42, quantity: 3 }
];

let sum_p = 0;

function countBasketPrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum_p = sum_p + arr[i].price;
    }
    console.log('Общая стоимость товаров в корзине: ' + sum_p);
}

let sum_q = 0;

function countBasketQuantity(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum_q = sum_q + arr[i].quantity;
    }
    console.log('Количество товаров в корзине: ' + sum_q);
}

countBasketPrice(x);

countBasketQuantity(x);

