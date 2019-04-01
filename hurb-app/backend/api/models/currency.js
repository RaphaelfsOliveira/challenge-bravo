// IMPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schemas
const CurrencySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    index: true,
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  timestamp : {
    type: String,
    required: true
  }
});

const currencyFormat = (number) => {
  if (number < Number.MAX_VALUE && number < Number.MAX_SAFE_INTEGER) {
    const num = String(number);
    const [integer, decimal] = num.split('.');

    let newDecimal = '', count = 0;
    for (const digit of decimal) {
      newDecimal += digit;
      if (digit !== '0' || count !== 0) {
        if (count === 2) break;
        count++;
      }
    }
    return parseFloat(`${integer}.${newDecimal}`);
  }
  return `Erro: Digite apenas numeros ou valor acima de MAX_VALUE`;
}

const curryConversion = (params) => {
  let fromCoin = params.from;
  let toCoin = params.to;
  let amount = params.amount;

  if (fromCoin && toCoin && amount) {
    const calc = ((1/toCoin)/(1/fromCoin))*amount;

    return currencyFormat(calc);
  }
  return `Error need params, from: ${fromCoin}, to: ${toCoin}, amount: ${amount}`;
};

// exports
module.exports = mongoose.model('Currency', CurrencySchema);
Currency = mongoose.model('Currency');
module.exports = curryConversion;
