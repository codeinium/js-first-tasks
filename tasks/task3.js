//Символ	Значение
// I	        1
// V	        5
// X	        10
// L	        50
// C		      100
// D		      500
// M		      1000

const romanValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function romanToInt(str) {
  let result = 0;
  let prevValue = 0;

  const values = [...str].map(char => romanValue[char]);

  return values.reduce((result, currentValue, index, array) => {
    if (index < array.length - 1 && currentValue < array[index + 1]) {
      return result - currentValue;
    } else {
      return result + currentValue;
    }
  }, 0);

  return result;
}

romanToInt("XVI")