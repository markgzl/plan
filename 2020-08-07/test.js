var maxArea = function(height) {
	let i = 0, j = height.length-1, width = j - i, area = 0
	while(i<j){
			width = j - i
			console.log(i,j)
			let cur =  width * Math.min(height[i],height[j])
			area = Math.max(cur, area)
			if(height[i]<height[j]){
					i++
			}else if(height[i]>=height[j]){
					j--
			}
	}
	return area
};
var intToRoman = function(num) {
	const l = {
			'I': 1,
			'V': 5,
			'X': 10,
			'L': 50,
			'C': 100,
			'D': 500,
			'M': 1000       
	}
	let i = 0, t = 0
	while(i<num.length){
			let next = num[i+1]
			let cur = num[i]
			console.log(i)
			if(next){
					if((cur==='I' && next==='V' )|| (cur==='I' && next==='X') || (cur==='X' && next ==='C') || (cur==='X' && next ==='L') || (cur ==='C'&& next==='D') || (cur ==='C'&& next==='M')){
						t = l[next] - l[cur] + t
						i = i+2
					}else{
						i++
						t = l[cur] + t
					}
			}else{
				i++
				t = l[cur] + t
			}
		
	}
	return t
};
// console.log(intToRoman('MCMXCIV'))
function intToRoman2(num){
	const l = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000       
	}

	let arr = `${num}`.split('').reverse()
	let wei = arr.length, i =0, str=[]
	arr.forEach((item, index)=>{
			if(item<9 && item !=0){
				switch(index){
					case 0:
						str.push()
						break
				}
			}
	})
}