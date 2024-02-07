

function fibonacciRecursive(num) {
	if (num < 0) {
	  return "Please Enter A positive Index";
	} else if (num == 0) {
	  return 0;
	} else if (num == 1) {
	  return 1;
	} else {
	  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
	}
  }

  console.log(fibonacciRecursive(8));