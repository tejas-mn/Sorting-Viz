export function selection_Sort(nums){
    var arr = [...nums];
    let n = nums.length;
    var swapIdx = [];
    console.log(arr);
    
    for (let i = 0; i < n-1; i++)
	{
		//Choose starting position i as  index of min element
		let min=i;

		//Check the rest of the array a[i+1...n-1]
		for(let j=i+1;j<n;j++)
		{
			//if I find any element a[j] < a[i] means a[j] is min element then j is the index of min element
            swapIdx.push([i , j , 0]);
			if(arr[j]<arr[min]){
				min=j;
               
            }
           
		}

		//Swap the min elementa[j] to its correct position or a[i]
       
        swapIdx.push([i , min, 1]);
        [arr[min],arr[i]] = [arr[i] , arr[min]]       
        
	}

    console.log(arr);
    console.log(swapIdx);
    return swapIdx;
}