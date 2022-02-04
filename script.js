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

async function createProductItemElement(/*{ sku, name, image }*/) {
  const object = await fetchProducts('computador');
  const array = await object.results;

  const section = document.createElement('section');
  section.className = 'item';

  array.forEach((product) => {
    section.appendChild(createCustomElement('span', product.id, product.id));
    section.appendChild(createCustomElement('span', product.title, product.title));
    section.appendChild(createProductImageElement(product.thumbnail));
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  });

  return section;
}

async function addProductsInContainer() {
  const container = document.querySelector('.items');
  container.appendChild((await createProductItemElement()));
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

window.onload = () => {
  addProductsInContainer();
};
