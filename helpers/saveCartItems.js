const saveCartItems = (args) => {
  // seu código aqui 
  let items = '';
  if (typeof args === 'object') {
    args.forEach((curr) => {
      items += curr;
    });
    localStorage.setItem('cartItems', items);
  }
 
  if (typeof args === 'number') {
    localStorage.setItem('totalPrice', args);
  } 
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
