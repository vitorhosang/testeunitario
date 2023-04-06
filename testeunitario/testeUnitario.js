import mocha from 'mocha'; // eslint-disable-line import/no-extraneous-dependencies

const assert = require('assert');
const { getRandomOddNumberInRange, findSmallestOddNumber } = require('./utils');

mocha.describe('getRandomOddNumberInRange', () => {
  mocha.it('Deve retornar um número ímpar dentro de um range específico.', () => {
    const result1 = getRandomOddNumberInRange(1, 10);
    assert.strictEqual(typeof result1, 'number');
    assert.notStrictEqual(result1 % 2, 0);
    assert.ok(result1 >= 1 && result1 <= 10);
    const result2 = getRandomOddNumberInRange(-5, 5);
    assert.strictEqual(typeof result2, 'number');
    assert.notStrictEqual(result2 % 2, 0);
    assert.ok(result2 >= -5 && result2 <= 5);
  });
});

mocha.describe('findSmallestOddNumber', () => {
  mocha.it('Deve retornar o menor número ímpar de um Array.', () => {
    const result1 = findSmallestOddNumber([43, 12, 66, 22, -3, 3]);
    assert.strictEqual(typeof result1, 'number');
    assert.notStrictEqual(result1 % 2, 0);
    assert.strictEqual(result1, -3);
    const result2 = findSmallestOddNumber([-2, -19, 19, 2, 2, 3]);
    assert.strictEqual(typeof result2, 'number');
    assert.notStrictEqual(result2 % 2, 0);
    assert.strictEqual(result2, -19);
    const result3 = findSmallestOddNumber([0, 2, 4, 6, 8, 10]);
    assert.strictEqual(result3, null);
  });
});
