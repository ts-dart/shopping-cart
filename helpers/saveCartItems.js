const saveCartItems = (args) => {
  // seu código aqui 
  let items = '';
  if (typeof args === 'object' || typeof args === 'string') {
    for (let index = 0; index < args.length; index += 1) {
      items += args[index];
    }
    localStorage.setItem('cartItems', items);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
