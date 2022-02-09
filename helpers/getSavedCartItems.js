const getSavedCartItems = (test) => {
  // seu código aqui
  const values = localStorage.getItem('cartItems');
  let result;
  
  if (values !== null || test) {
    const items = String(values);
    result = items.split(';');
    result.pop();
    return result;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
