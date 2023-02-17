let menuButton = document.querySelector('.header__menu-button');
let burgerMenu = document.querySelector('.burger-menu');

let burgerMenuCloseButton = document.querySelector('.burger-menu__close-button');

let cover = document.querySelector('.opacity');


function openBurgerMenu () {
  burgerMenu.classList.add('burger-menu_active');
  pageOpacityAdd();
}

function closeBurgerMenu () {
  burgerMenu.classList.remove('burger-menu_active');
  pageOpacityRemove ();
}

function pageOpacityAdd () {
  cover.classList.add('opacity_active');
}

function pageOpacityRemove () {
  cover.classList.remove('opacity_active');
}

menuButton.addEventListener('click', openBurgerMenu);
burgerMenuCloseButton.addEventListener('click', closeBurgerMenu);


let burgerMenuListItemOne = document.querySelector('.burger-menu__list-item_active-one');
let burgerMenuListItemTwo = document.querySelector('.burger-menu__list-item_active-two');
let burgerMenuListItemThree = document.querySelector('.burger-menu__list-item_active-three');
let burgerMenuListItemFour = document.querySelector('.burger-menu__list-item_active-four');


image.onmouseover = function(){
 burgerMenuListItemOne.classList.add('burger-menu__img_go');
 this.src = '../images/Menu-1-go.png';
}
image.onmouseout = function(){
 burgerMenuListItemOne.classList.remove('burger-menu__img_go');
 this.src = '../images/Menu-1.png';
}

image2.onmouseover = function(){
  burgerMenuListItemTwo.classList.add('burger-menu__img_go');
  this.src = '../images/Menu-2-go.png';
 }
 image2.onmouseout = function(){
  burgerMenuListItemTwo.classList.remove('burger-menu__img_go');
  this.src = '../images/Menu-2.png';
 }

 image3.onmouseover = function(){
  burgerMenuListItemThree.classList.add('burger-menu__img_go');
  this.src = '../images/Menu-3-go.png';
 }
 image3.onmouseout = function(){
  burgerMenuListItemThree.classList.remove('burger-menu__img_go');
  this.src = '../images/Menu-3.png';
 }

 image4.onmouseover = function(){
  burgerMenuListItemFour.classList.add('burger-menu__img_go');
  this.src = '../images/Menu-4-go.png';
 }
 image4.onmouseout = function(){
  burgerMenuListItemFour.classList.remove('burger-menu__img_go');
  this.src = '../images/Menu-4.png';
 }

 let offset = 0;
 const sliderLine= document.querySelector('.content__slider-line');

 document.querySelector('.content__slider-arrow-left').addEventListener('click', function() {
  offset = offset - 450;
  if (offset < -450) {
    offset = 450;
  }
  sliderLine.style.left = -offset + 'px';
 });

 document.querySelector('.content__slider-arrow-reight').addEventListener('click', function() {
  offset = offset + 450;
  if (offset > 450) {
    offset = -450;
  }
  sliderLine.style.left = -offset + 'px';
 });