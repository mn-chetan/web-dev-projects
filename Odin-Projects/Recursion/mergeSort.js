function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function merge(leftSorted, rightSorted) {
  const result = [];

  let i = 0;
  let j = 0;
  while (i < leftSorted.length && j < rightSorted.length) {
    if (leftSorted[i] < rightSorted[j]) {
      result.push(leftSorted[i]);
      i++;
    } else if (rightSorted[j] < leftSorted[i]) {
      result.push(rightSorted[j]);
      j++;
    } else {
      result.push(leftSorted[i]);
      result.push(rightSorted[j]);
      i++;
      j++;
    }
  }

  while (i < leftSorted.length) {
    result.push(leftSorted[i]);
    i++;
  }

  while (j < rightSorted.length) {
    result.push(rightSorted[j]);
    j++;
  }

  return result;
}
