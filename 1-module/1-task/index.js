/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {

  let result = m;

  for (let i = 1; i < n; i++) {
    result *= m;
  }

  return result;
}

const m = +prompt('m', "");
const n = +prompt('n', "");

if (n <= 1) {
  alert('Данные не верные. Цифры должны быть больше 1')
} else {
  pow(m, n);
}