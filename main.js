'use strict'

const $cart = document.querySelector('.cart');
const $catalog = document.querySelector('.catalog');


function getIDCounter() {
    let ID = 1;
    return function () {
        return ID++;
    }
}

let ProductID = getIDCounter();
let cartID = getIDCounter();

let cart = [];
let products = [];


function Product(name, price, quantity) {
    this.id = ProductID();
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

function Catalog(img, name, description, price, quantity) {
    this.id = cartID();
    this.img = img;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
}


function fetchProduct() {
    cart = [
        new Catalog('img/photo-1.jpg', 'jercy', 'jercy description', 1800, 1),
        new Catalog('img/photo-2.jpg', 'cap', 'cap description', 1200, 1),
        new Catalog('img/photo-3.jpg', 'blouse', 'blouse description', 1500, 1),
        new Catalog('img/photo-4.jpg', 'trousers', 'trousers description', 1200, 1),
        new Catalog('img/photo-5.jpg', 'sneakers', 'sneakers description', 5000, 1),
        new Catalog('img/photo-6.jpg', 'socks', 'socks description', 990, 1)
    ];
}

fetchProduct();


function addToCart(id) {
    for (let good of cart) {
        if (good.id === id)
            products.push(new Product(good.name, good.price, good.quantity));
    }
}


for (let i of cart) {
    let html = `<div class="item">
            <img class="image" src="${i.img}" data-idx=${i.id}>
            <i class="fas fa-search-plus"></i>
        <div class="btn">
            <p class="name"> ${i.name} </p>
            <p class="description"> ${i.description} </p>
            <p class="price"> ${i.price} </p>
            <button class="button" data-id=${i.id}>В корзину</button>
        </div>
    </div >`;
    $catalog.insertAdjacentHTML('beforeend', html);
}


$catalog.addEventListener('click', function (e) {
    addToCart(Number(e.target.getAttribute('data-id')));
    countBasketPrice(products);
});


function countBasketPrice(arr) {
    let sum_p = 0;
    let sum_q = 0;

    for (let prod of arr) {
        sum_p += prod.price * prod.quantity;
        sum_q += prod.quantity;
    }
    $cart.textContent = '';
    if (arr.length === 0) {
        return $cart.textContent = 'Корзина пуста';
    } else {
        return $cart.textContent = 'В корзине: ' + sum_q + ' товаров на сумму ' + sum_p + ' рублей';
    }
}

countBasketPrice(products);

//Галаерея

const $popup_gallery = document.querySelector('.popup_gallery');
const $close = $popup_gallery.querySelector('.close');
const $previous = $popup_gallery.querySelector('.previous');
const $next = $popup_gallery.querySelector('.next');
const $image = $catalog.querySelectorAll('.image');


const gallery_image = [
    ['img/photo-1.jpg', 'img/photo-2.jpg', 'img/photo-6.jpg'],
    ['img/photo-2.jpg', 'img/photo-1.jpg', 'img/photo-5.jpg'],
    ['img/photo-3.jpg', 'img/photo-5.jpg', 'img/photo-4.jpg'],
    ['img/photo-4.jpg', 'img/photo-6.jpg', 'img/photo-3.jpg'],
    ['img/photo-5.jpg', 'img/photo-3.jpg', 'img/photo-2.jpg'],
    ['img/photo-6.jpg', 'img/photo-4.jpg', 'img/photo-1.jpg']
]


for (let img of $image) {
    img.addEventListener('click', function (e) {
        getGallery(gallery_image, Number(e.target.getAttribute('data-idx')));
    })
}


function getGallery(e, y) {
    $popup_gallery.lastChild.remove();

    const PopImg = e[y - 1].map(function (img) {
        return `<img class="popup_img" src="${img}" />`
    }).join(' ');

    const htmlPop = `<div class="slider">
    <button class="previous">←-</button>
        <div class="slide">
            ${PopImg}
        </div>
    <button class="next">-→</button>
    </div>`
    $popup_gallery.insertAdjacentHTML('beforeend', htmlPop)
    $popup_gallery.style.display = 'block';

    Slider($popup_gallery.querySelector('.slider'), 0);
}


function Slider($slider, start) {
    let currentSlide = start;
    let img = $slider.querySelectorAll('.popup_img');

    function nxtSlide() {
        img[currentSlide].style.display = 'none';
        currentSlide = (currentSlide === img.length - 1) ? 0 : currentSlide + 1;
        img[currentSlide].style.display = 'block';
    }

    function prvSlide() {
        img[currentSlide].style.display = 'none';
        currentSlide = (currentSlide === 0) ? img.length - 1 : currentSlide - 1;
        img[currentSlide].style.display = 'block';
    }

    $slider.querySelector('.previous').addEventListener('click', prvSlide);
    $slider.querySelector('.next').addEventListener('click', nxtSlide);

    img[currentSlide].style.display = 'block';
}


function close(e) {
    if (e.key === 'Escape' || e.type === 'click')
        $popup_gallery.style.display = 'none';
}


document.addEventListener('keydown', close);
$close.addEventListener('click', close);


