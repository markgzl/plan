let reg2 = /\d{4}-\d{2}-\d{2}/ ;
let reg = /(\d{4})-(\d{2})-(\d{2})/ ;
const str = '2020-03-12'
console.log(str.match(reg2))
console.log(str.match(reg))
console.log(RegExp.$1)

Promise.retry = function(fn,time=5){
	let flag = false
	return new Promise(async (resolve,reject)=>{
		while(time>0 && !flag){
			try{
				const res = await fn()
				resolve(res)
				flag = true
			}catch(e){
				if(time<=0){
					reject(e)
				}
				time--
			}
		}
	})
}