'use strict'

//1. Шахматная доска

const chess = document.querySelector('.chess');

const arrEN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for (let i = 0; i < 9; i++) {
    let x = document.createElement('div');
    chess.appendChild(x);
    x.classList.add('chess__line');

    for (let k = 0; k < 9; k++) {
        let y = document.createElement('div');
        x.appendChild(y);
        y.classList.add('chess__box');

        if (i === 0) {
            y.textContent = arrEN[k - 1];
            y.classList.add('chess__box_num-let');
        } else if (k === 0 && i !== 0) {
            y.textContent = i;
            y.classList.add('chess__box_num-let');
        } else {
            if (k % 2 === 0 && i % 2 === 0 || k % 2 !== 0 && i % 2 !== 0)
                y.classList.add('chess__box_black');
        }
    }
}



//2. Корзина

const cart = document.querySelector('.cart');
cart.style.cssText = 'display: flex; justify-content: flex-end; margin: 20px 100px 50px 20px; font-size: 20px;';

function Product(name, price, quantity, color, size,) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.color = color;
    this.size = size;
}

const products = [
    new Product('jersey', 1800, 1, 'white', 'xl'),
    new Product('cap', 1200, 2, 'red', 'l'),
    new Product('blouse', 1500, 2, 'dark blue', 'xl'),
    new Product('trousers', 1200, 2, 'black', 'l'),
    new Product('sneakers', 5000, 1, 'black and white', 42),
    new Product('socks', 990, 3, 'white', 42)
];

function countBasketPrice(arr) {
    let sum_p = 0;
    let sum_q = 0;

    for (let prod of arr) {
        sum_p += prod.price * prod.quantity;
        sum_q += prod.quantity;
    }
    if (arr.length === 0) {
        return cart.textContent = 'Корзина пуста';
    } else {
        return cart.textContent = 'В корзине: ' + sum_q + ' товаров на сумму ' + sum_p + ' рублей';
    }
}

countBasketPrice(products);



//3*. Каталог

const catalog = document.querySelector('.catalog');

function Catalog(img, name, description, price) {
    this.img = img;
    this.name = name;
    this.description = description;
    this.price = price;
}

const catalog_item = [
    new Catalog('img/photo-1.jpg', 'jercy', 'jercy description', 1800),
    new Catalog('img/photo-2.jpg', 'cap', 'cap description', 1200),
    new Catalog('img/photo-3.jpg', 'blouse', 'blouse description', 1500),
    new Catalog('img/photo-4.jpg', 'trousers', 'trousers description', 1200),
    new Catalog('img/photo-5.jpg', 'sneakers', 'sneakers description', 5000),
    new Catalog('img/photo-6.jpg', 'socks', 'socks description', 990)
];

for (let i of catalog_item) {
    let item = document.createElement('div');
    catalog.appendChild(item);
    item.classList.add('item');

    let image = document.createElement('img');
    item.appendChild(image);
    image.classList.add('image');
    image.setAttribute('src', i.img);

    let name = document.createElement('p');
    item.appendChild(name);
    name.classList.add('name');
    name.textContent = i.name;

    let description = document.createElement('p');
    item.appendChild(description);
    description.classList.add('description');
    description.textContent = i.description;

    let price = document.createElement('p');
    item.appendChild(price);
    price.classList.add('price');
    price.textContent = i.price;
}