const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api';

describe('Testes da API SWAPI', () => {
  test('Buscar dados da nave 9', async () => {
    const response = await axios.get(`${BASE_URL}/starships/9/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 9:', response.data)
  });

  test('Buscar dados da nave 8', async () => {
    const response = await axios.get(`${BASE_URL}/starships/8/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 8:', response.data)
  });

  test('Buscar dados da nave 7', async () => {
    const response = await axios.get(`${BASE_URL}/starships/7/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 7:', response.data)
  });

  test('Buscar Lista de personagens 1', async () => {
    const response = await axios.get(`${BASE_URL}/people/1/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 8:', response.data)
  });
});
