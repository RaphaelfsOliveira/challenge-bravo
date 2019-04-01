const request = require('request-promise');

const TEST = `[TESTET ${Date()}]`;

const URL = {
  origin: 'http://localhost:8000',
  api: '/api',
  list: '/conversion',
  conv: `/conversion/from=USD&to=USD&amount=1`
}

const testEndpointList = () => {
  const name =`[Listagem de moedas]`;
  const url = `${URL.origin}${URL.api}${URL.list}`;

  request(url, (err, res, body) => {
    if (res.statusCode === 200) {
      console.log(`
        ${name}

        - TEST: OK

        - STATUS: ${res.statusCode} API OK
      `);
    } else {
      console.log(`
        ${name}

        - TEST: ERROR

        - STATUS: ${res.statusCode} Endpoint não respondendo
      `);
    }
  });
};

const testEndpointListConversion = () => {
  const name = `[Conversão de moedas]`;
  const url = `${URL.origin}${URL.api}${URL.conv}`;

  request(url, (err, res, body) => {
    if (res.statusCode === 200) {

      const copyBody = JSON.parse(body);

      const testCalcConversion = () => {
        const coins = (copyBody.params.from === copyBody.params.to);
        const values = (copyBody.params.amount === copyBody.convertedValue);
        return (coins && values) ? true: false;
      };

      if (testCalcConversion()) {
        console.log(`
          ${name}

          - TEST: OK

          - BODY: ${body}
        `);
      } else {
        console.log(`
          ${name}

          - TEST: ERROR

          - Verificar calculo de conversão

          - BODY: ${body}
        `);
      }
    } else {
      console.log(`
        ${name}

        - TEST: ERROR

        - BODY: ${body}
      `);
    }
  });

};

console.log(TEST);
testEndpointList();
testEndpointListConversion();
