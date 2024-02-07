function bubbleSort(arr) 
{  

	for(let i=0;i<arr.length - 1 ;i++)
	{
	  for (let j = 0; j < arr.length - i - 1; j++) 
	  {
		if (arr[j] > arr[j+ 1]) 
		{	 
		  [arr[j], arr[j + 1]] =[arr[j+1],arr[j]];
		}
	  }	
	}

	return arr;

}

console.log(bubbleSort([1,6,5,7,4]));
console.log(bubbleSort([1,0,4,5,6]));
