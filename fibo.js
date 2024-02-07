function fibonacciIterative(index) {
	if (index < 0) {
		return "Please enter a positive index";
	} else if (index == 0) {
	  return 0;
	} else if (index == 1) {
	  return 1;
	} else {
	  let fibonacciSequence = [0, 1];
	  for (let i = 2; i <= index; i++) {
		let next = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
		fibonacciSequence.push(next);
	  }
	  return fibonacciSequence[index];
	}
}

console.log(fibonacciIterative(8));
