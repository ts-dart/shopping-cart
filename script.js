function totalPrice() {
  const ol = document.querySelector('.cart__items3');
  const div = document.querySelector('.total-price');
  let sum = 0;

  for (let li = 0; li < ol.children.length; li += 1) {
    const number = Number(ol.children[li].id);
    sum += number;
  }

  div.innerText = sum;
  localStorage.setItem('totalPrice', sum);
}

function clearShoppingCart() {
  document.querySelector('.empty-cart').addEventListener('click', () => {
    document.querySelector('.cart__items2').innerHTML = '';
    localStorage.clear();
    totalPrice();
  });
}

function cartItemClickListener(evento) {
  // coloque seu código aqui
  document.querySelector('.cart__items').removeChild(evento.target);
  totalPrice();
  saveCartItems();
}

function showItemsFromLocalStorage() {
  if (getSavedCartItems() !== undefined) {
    getSavedCartItems().forEach((cartItem) => {
      const li = document.createElement('li');
      li.className = 'cart__item';
      li.innerHTML = cartItem;
      li.addEventListener('click', (evento) => cartItemClickListener(evento));
      document.querySelector('.cart__items2').appendChild(li);
    });
    document.querySelector('.total-price').innerHTML = localStorage.getItem('totalPrice');
  }
}

const fromStorage = [];
function createCartItemElement(product) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${product.id} | NAME: ${product.title} | PRICE: $${product.price}`;
  li.id = product.price;
  li.addEventListener('click', (evento) => cartItemClickListener(evento));

  fromStorage.push(`SKU: ${product.id} | NAME: ${product.title} | PRICE: $${product.price};`);
  saveCartItems(fromStorage);
  return li;
}

function addProductsInCartItems(obj) {
  const ol = document.querySelector('.cart__items');
  ol.appendChild(createCartItemElement(obj));
  totalPrice();
  saveCartItems();
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

function createProductItemElement(id, title, thumbnail) {
  sec = document.createElement('section');
  sec.className = 'item';

  sec.appendChild(createCustomElement('span', id, id));
  sec.appendChild(createCustomElement('span', title, title));
  sec.appendChild(createProductImageElement(thumbnail));
  sec.appendChild(createCustomElement('button', `item__add ${id}`, 'Adicionar ao carrinho!'));

  return sec;
}

async function addProductsInContainer() {
  const object = await fetchProducts('computador');
  const array = await object.results;

  const contain = document.querySelector('.items');
  array.forEach((p) => contain.appendChild((createProductItemElement(p.id, p.title, p.thumbnail))));

  getIdMlb();
}

window.onload = () => {
  showItemsFromLocalStorage();
  addProductsInContainer();
  clearShoppingCart();
};
