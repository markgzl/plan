/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a,b,callback) {
  setTimeout(function(){
		callback(null, a+b)
  },1000)
}

// async function sum(...rest) {
// 	let p = []
// 	for(let val of Array.from(rest)){

// 		p.push(new Promise(resolve=>{
// 			asyncAdd(0, val, ()=>{
// 				resolve(val)
// 			})
// 		}))
// 	}
// 	return (await Promise.all(p)).reduce((pre,cur)=> pre+cur)
// }

async function sum(...rest){
	let p = [], i=0;
	const arr = Array.from(rest)
	let obj = { toString: ()=>  0 }
	while(i<arr.length){
		p.push(
			new Promise(resolve=>{
				asyncAdd(arr[i], arr[i+1],()=>{
					obj.toString = () => arr[i+1] ? ( obj + arr[i]+ arr[i+1]):  obj + arr[i]
					resolve(obj)
				})
			})
		)
		i++;
	}
	await Promise.all(p)
	return obj
}
// let start = window.performance.now()
sum(1, 2, 3, 4, 5, 6).then(res => {
  // 请保证在调用sum方法之后，返回结果21
  console.log(res)
  // console.log(`程序执行共耗时: ${window.performance.now() - start}`)
})
//  object, object object, undefined object false true