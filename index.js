const response = await fetch('https://dummyjson.com/products');
const data = await response.json();
console.log(data.products[1]);

const contentOrderDiv = document.createElement('div');
contentOrderDiv.className = 'content-order';
contentOrderDiv.id = 'content-order';

const contentOrderCart = document.createElement('div');
contentOrderCart.className='content-order-cart';
contentOrderCart.id='content-order-cart';

const contentOrderBorder = document.createElement('div');
contentOrderBorder.className = 'content-order-border';
contentOrderCart.appendChild(contentOrderBorder);

const contentOrderInf = document.createElement('div');
contentOrderInf.className = "content-order-cart-inf";
contentOrderInf.id = "content-order-cart-inf";

contentOrderCart.appendChild(contentOrderInf);

const headerCart = document.createElement('div');
headerCart.className="content-order-cart-head";
headerCart.id='content-order-cart-head';
const spanHead = document.createElement('span');
spanHead.innerHTML = "orders---kitchen";
contentOrderInf.appendChild(headerCart);


headerCart.appendChild(spanHead);