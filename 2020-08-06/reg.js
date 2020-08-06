let reg2 = /\d{4}-\d{2}-\d{2}/ ;
let reg = /(\d{4})-(\d{2})-(\d{2})/ ;
const str = '2020-03-12'
console.log(str.match(reg2))
console.log(str.match(reg))
console.log(RegExp.$1)