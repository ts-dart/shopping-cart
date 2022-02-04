const fetchProducts = async (item) => {
  // seu código aqui
  if (item === undefined) return new Error('You must provide an url');
  const promise = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  const data = await promise.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
