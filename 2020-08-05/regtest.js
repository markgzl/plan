let timerReg = /^(0?[0-9]|1[0-9]|2[0-3])\:(0?[0-9]|[0-5][0-9])/

let t = ['01:01', '12:00', '2:1', '23:59', '23:01','24:01']
t.forEach(item=>{
	// console.log(timerReg.test(item))
	console.log(item.match(timerReg))
})

var convertToTitle = function(n) {
	const allWord = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	let result = ''
	while(n>0){
		n--
		result += allWord[(n%26)] 
		n = Math.floor(n/26)
	}
	return result
};
let ns = [701,20,30,10000,900,26]
ns.forEach(item=>{
	console.log(convertToTitle(item))
})
