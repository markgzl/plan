// 三数之和
function sumThree(nums){
	let map = new Map()
	let i = 0;
	let result = []
	nums.sort((a,b)=> a-b)
	if(nums.length<3) return result
	while(i<nums.length-1){
		for(let j=i+1; j<nums.length; j++){
			let diff = 0 - (nums[i]+nums[j])
			let set = new Set([i,j])
			map.set(diff, set)
		}
		i++
	}
	let  obj={}
	for(let [index, val ] of nums.entries()){
		let s = map.get(val)
		if(map.has(val) && !s.has(index)){
			let [a, b] = s
			let	key =  `${a}${index}${b}`
			if(a>index){
				key =  `${index}${a}${b}`
			}else if(index>b){
				key =  `${a}${b}${index}`
			}
			let f = nums[a], sd = nums[b]

			if(!obj[key] && (!obj[`${f}${sd}`] &&  !obj[`${sd}${f}`])){
				obj[key] = true
				obj[`${f}${sd}`] = true
				obj[`${sd}${f}`] = true
				result.push([f,sd, val])
			}
		}
	}
	return result
}
// let nums = [-1, 0, 1, 2, -1, -4]
let num2 = [1,-1,-1,0]
// console.log(sumThree(nums))
console.log(sumThree(num2))