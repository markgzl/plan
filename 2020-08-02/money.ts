function isMoney(n: string): boolean {
	const reg = /[0-9]\.[0-9]/
	return reg.test(n)
}
function formatMoney(num: number | string, sub: number): string {
	let [int, float] = `${num}`.split('.')
	let ns = int.split('').reverse()
	let p = []
	for(let i=0; i<ns.length;i++){
		let n = ns[i]
		if((i+1)%3===0){
			p.push(',')
		}
		p.push(n)
	}
	return p.reverse().join('') + `.${float}`
}


console.log(formatMoney(14430320.9021, 3))