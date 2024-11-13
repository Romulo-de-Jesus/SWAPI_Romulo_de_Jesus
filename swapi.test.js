const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api';

describe('Testes da API SWAPI', () => {
  test('Buscar dados da nave 9', async () => {
    const response = await axios.get(`${BASE_URL}/starships/9/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();

    console.log('Dados da nave 9:', response.data)
  });


});
