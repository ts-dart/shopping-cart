const getSavedCartItems = () => {
  // seu código aqui
  const items = localStorage.getItem('cartItems');
  if (items !== null && items !== undefined) {
    const array = items.split(';');
    array.pop();
    return array;
  }
  return 'No items saved in cart';
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
