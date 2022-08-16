export function bubble_Sort(nums){
    var arr = [...nums];
    var swapIdx = [];
    let isSwapped = false;

    for(var i = 0; i < arr.length; i++){
    
      for(var j = 0; j < ( arr.length - i -1 ); j++){
           
        swapIdx.push([j, j+1 , 0]);
            
        if(arr[j] > arr[j+1]){
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp

          swapIdx.push([j, j+1 , 1]);
          isSwapped = true;
          
        }
     
      }
      if(!isSwapped){
          break;
      }
    }

    console.log(arr);
    console.log(swapIdx);
    return swapIdx;
}