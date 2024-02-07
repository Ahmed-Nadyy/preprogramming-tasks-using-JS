function bubbleSortRecursive(array, currentIndex = 0, swapped = false) {
    if (currentIndex == array.length - 1) {
        if (swapped) {
            return bubbleSortRecursive(array, 0, false);
        } else {
            return array; 
        }
    }

    if (array[currentIndex] > array[currentIndex + 1]) {
        [array[currentIndex], array[currentIndex + 1]] = [array[currentIndex + 1], array[currentIndex]]; // Swap elements
        swapped = true;
    }

    return bubbleSortRecursive(array, currentIndex + 1, swapped);
}

console.log(bubbleSortRecursive([1, 6, 5, 4, 3, 2, 0]));
