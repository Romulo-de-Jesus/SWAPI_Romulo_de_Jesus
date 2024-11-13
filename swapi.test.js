const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api';

describe('Testes da API SWAPI', () => {
  test('Buscar dados da nave 9', async () => {
    const response = await axios.get(`${BASE_URL}/starships/9/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 9:', response.data)
  });

  test('Buscar dados da nave 5', async () => {
    const response = await axios.get(`${BASE_URL}/starships/5/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 5:', response.data)
  });

  test('Buscar dados da nave 3', async () => {
    const response = await axios.get(`${BASE_URL}/starships/3/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 3:', response.data)
  });

  test('Buscar personagem 1', async () => {
    const response = await axios.get(`${BASE_URL}/people/1/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 8:', response.data)
  });
});
