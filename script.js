function totalPrice() {
  const ol = document.querySelector('#cartItems');
  const div = document.querySelector('.total-price');
  let sum = 0;

  for (let li = 0; li < ol.children.length; li += 1) {
    const number = Number(ol.children[li].id);
    sum += number;
  }

  div.innerText = `Subtotal: ${sum}`;
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement(array) {
  const sec = document.createElement('section');
  sec.className = 'item';
  
  array.forEach((p) => {
    sec.appendChild(createCustomElement('span', p.id, p.id));
    sec.appendChild(createCustomElement('span', p.title, p.title));
    sec.appendChild(createProductImageElement(p.thumbnail));
    sec.appendChild(createCustomElement('button', `item__add ${p.id}`, 'Adicionar ao carrinho!'));
  });

  return sec;
}

function cartItemClickListener(evento) {
  // coloque seu código aqui
  document.querySelector('.cart__items').removeChild(evento.target);
  totalPrice();
}

function createCartItemElement(product) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${product.id} | NAME: ${product.title} | PRICE: $${product.price}`;
  li.id = product.price;
  li.addEventListener('click', (evento) => cartItemClickListener(evento));
  return li;
}

function addProductsInCartItems(obj) {
  const ol = document.querySelector('.cart__items');
  ol.appendChild(createCartItemElement(obj));
  totalPrice();
}

async function getProduct(product) {
  const obj = await product;
  addProductsInCartItems(obj);
}

function getIdMlb() {
  const el = document.querySelectorAll('.item__add');
  el.forEach((btn) => btn.addEventListener('click', () => {
    getProduct(fetchItem(btn.classList.item(1)));
  }));
}

async function addProductsInContainer() {
  const object = await fetchProducts('computador');
  const array = await object.results;
  
  const container = document.querySelector('.items');
  container.appendChild((createProductItemElement(array)));

  getIdMlb();
}
/*
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
*/
window.onload = () => {
  addProductsInContainer();
};
