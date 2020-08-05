let timerReg = /^(0?[0-9]|1[0-9]|2[0-3])\:(0?[0-9]|[0-5][0-9])/

let t = ['01:01', '12:00', '2:1', '23:59', '23:01','24:01']
t.forEach(item=>{
	// console.log(timerReg.test(item))
	console.log(item.match(timerReg))
})