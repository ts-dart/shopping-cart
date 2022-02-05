const fetchItem = async (id) => {
  // seu código aqui
  if (id === undefined) return new Error('You must provide an url');
  const promise = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await promise.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
