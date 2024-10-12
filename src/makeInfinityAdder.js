'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0; // Змінна для збереження поточної суми

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0; // Очищаємо суму після повернення результату

      return result;
    } else {
      sum += args.reduce((acc, num) => acc + num, 0); // Додаємо всі числа

      return adder; // Повертаємо саму функцію для подальших викликів
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
