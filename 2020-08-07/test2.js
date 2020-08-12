var insertionSortList = function(head) {
  for(let i=1;i<head.length;i++){
      let tmp=head[i]
      for(let j=i+1;j>0;j--){
          if(tmp<head[j-1]){
            head[j]=head[j-1]
            head[j-1]=tmp
          }
      }
	}
  return head;
};

function insertionSortList2(nums) {
    for (let i = 0; i < nums.length-1; i++) {
			for(let j=i+1; j<nums.length; j++){
				let cur = nums[i]
				let next = nums[j]
				if(cur >= next){
					nums[i] = next
					nums[j] = cur
				}
			}
		}
		return nums
}

console.log(insertionSortList([4, 2, 2,5,7,1, 3]))