var letterCombinations = function(digits) {
	let keyboards = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','x']]
	let result = []
	const [first, ...rest] = `${digits}`.split('')
	let fi = keyboards[first], ne = []
	for(let k of rest){
		const words = keyboards[k]
		for(let cu of words){

		}
	}
	
	for(let val of `${digits}`.split('')){
		let word = keyboards[val]
		for(let k of word){
			
		}
		console.log(word)
		result.push(word)
	}
	return result
}

var findSubstring = function(s, words) {
	let word = words.join('')
	let reword = words.reverse().join('')
	let list = []
	let reg = new RegExp(`${word}|${reword}`, 'g')
	var result = null
	while((result = reg.exec(s)) !== null){
			console.log(result.index)
			list.push(result.index)
	}
	return list
};

console.log(findSubstring("barfoothefoobarman",["foo","bar"]))
console.log(findSubstring("W3School, W3School is a place to study web technology.",["W3School"]))