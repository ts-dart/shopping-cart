require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  
  it('Testa se fetchProducts e uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Testa se fetch foi chamada na função fetchProducts', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })

  it('Testa se o retorno de fetchProducts com o argumento "computador" é uma estrutura de dados igual ao obj computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  })

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  })
});
