let swapArr = []

function Partition(a, low, high)
{
	let pivot = a[low];
    let  i = low;
    let  j = high;

  while (i <= j) {
    while (a[i] < pivot) {
        swapArr.push([i, low, 0]);
      i++;
    }
    while (a[j] > pivot) {
        swapArr.push([j, low, 0]);
      j--;
    }
    if (i <= j) {
        
        swapArr.push([i, j, 1]);     
      [a[i] , a[j]] = [a[j] , a[i]];
 
      i++;
      j--;
    }
  }
  return i;
}

function QuickSort(a ,low, high)
{
	//If the problem is big
	//Array size > 2
	if(low<high)
	{
		//Find the index j of the pivot by Partitioning the array a[low...high+1]
    
		let j=Partition(a,low,high);
        
		//Sort the left part before the pivot element i.e a[low...j-1]
		if(low < j-1) QuickSort(a,low,j-1);

		//Sort the right part after the pivot element i.e a[j...high]
		if(high > j) QuickSort(a,j,high);
	}
	return ;
}


export function quick_Sort(a){
    swapArr = []
    let arr = [...a];

    QuickSort(arr , 0 , arr.length-1);   

    console.log(arr);
    
    return swapArr;
}
