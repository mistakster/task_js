//проверяет равенство массивов по значению
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
}

//единичная итерация перераспределения ячейки в массиве
function blurMaxValue(arr) {
  let maxValue = Math.max(...arr);
  let maxValueIndex = arr.indexOf(maxValue);
  arr[maxValueIndex] = 0;

  let curIndex = maxValueIndex;
  while (maxValue > 0) {
    if (curIndex === arr.length - 1) {
      curIndex = 0;
    } else {
      curIndex++;
    }
    maxValue--;
    arr[curIndex]++;
  }
  return arr;
}

// поиск решения задачи
function findSolution(arr) {
  let versions = [arr.slice()];
  let currentArray = arr.slice();
  while (true) {
    currentArray = blurMaxValue(currentArray);
    for (let i = 0; i < versions.length; i++) {
      if (arraysEqual(versions[i], currentArray)) {
        console.log('Шагов до обнаружения цикла: ' + versions.length);
        console.log(`Длина цикла: ${versions.length - i}`);
        return;
      }
    }
    versions.push(currentArray.slice());
  }
}

// тест
findSolution([0, 5, 10, 0, 11, 14, 13, 4, 11, 8, 8, 7, 1, 4, 12, 11]);