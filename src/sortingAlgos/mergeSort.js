let swapArr = []


// Calculating next gap
function nextGap(gap)
{
	if (gap <= 1)
		return 0;
		
	return parseInt(Math.ceil( gap / 2.0));
}

// Function for swapping
function swap(nums,  i,  j)
{
	let temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

// Merging the subarrays using shell sorting
// Time Complexity: O(nlog n)
// Space Complexity: O(1)
function inPlaceMerge(nums,  start, end)
{
	let gap = end - start + 1;
	
	for(gap = nextGap(gap);
		gap > 0; gap = nextGap(gap))
	{
		for(let i = start; i + gap <= end; i++)
		{
			let j = i + gap;
			swapArr.push([i , j , 0]);
			if (nums[i] > nums[j]){
				swap(nums, i, j);
				swapArr.push([i,j,1])
			}
				
		}
	}
}

// merge sort makes log n recursive calls
// and each time calls merge()
// which takes nlog n steps
// Time Complexity: O(n*log n + 2((n/2)*log(n/2)) +
// 4((n/4)*log(n/4)) +.....+ 1)
// Time Complexity: O(logn*(n*log n))
// i.e. O(n*(logn)^2)
// Space Complexity: O(1)
function mergeSort( nums,  s, e)
{
	if (s === e)
		return;

	// Calculating mid to slice the
	// array in two halves
	let mid = parseInt((s + e) / 2);

	// Recursive calls to sort left
	// and right subarrays
	mergeSort(nums, s, mid);
	mergeSort(nums, mid + 1, e);
	
	inPlaceMerge(nums, s, e);
}


export function merge_Sort(nums){
    swapArr = []
    let a = [...nums];

    mergeSort(a , 0 , a.length-1);   

    console.log(a);
    
    return swapArr;
}
