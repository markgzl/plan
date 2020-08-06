class MinStack {
	private minStack: number[] = []
	private stack: number[] = []
	constructor() {

	}

	push(x: number): void {
		this.stack.push(x)
		if (!this.minStack.length || x < this.minStack[this.minStack.length - 1]) {
			this.minStack.push(x)
		}
	}

	pop(): void {
		const p = this.stack.pop()
		if (p === this.minStack[this.minStack.length - 1]) {
			this.minStack.pop();
		}

	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minStack[this.minStack.length - 1];
	}
}
// const stack = new MinStack()
// stack.push(1)
// stack.push(0)
// stack.push(1)
// console.log(stack)
// console.log(stack.getMin())
// stack.pop()
// console.log(stack)
// console.log(stack.getMin())

function palindromePairs(words: string[]): number[][] {
	let result: number[][] = []
	for (let i = 0; i < words.length; i++) {
		// let j = i+1
		for (let j = 0; j < words.length; j++) {
			if (i === j) continue
			let ab = `${words[i]}${words[j]}`
			if (isPalindromepairs(ab)) {
				result.push([i, j])
			}
		}
	}

	return result
};
function isPalindromepairs(str: string): boolean {
	return str === str.split('').reverse().join('')
}
let str = ["bdcag","hahihgighdaacejbbh","gjddbfh","debhiifdacdcj","gcbjgiiff","jdjadgg","fgfcceafjbfabcife","aifib","jdbhhb","i","hjbaejhddghbcif","agiabhihgfjfeg","gbdggfjdegghje","bahehd","befej","gjafgc","cafdbidegbid","dbgbbjdidifcbefc","jaejijjgjiiiea","bhedaagfaiif","hcdbjbefahf","fejccfijhfjcbdfgbe","jiebjbciehigcagg","bijiefhdeiijhhji","ieaacjhb","ahjibha","aggcigjfajf","ibcaabedhaibi","fiaafe","cgajdijcc","ddhcddejibhefdfc","ichfgdcjg","jejcafgjfdheedjbb","jbihejgcibdgfcaeif","geiiaiggdhehhdaafgc","hhdahbdhdjjagbchid","a","agea","dae","igffi","acjccegbddhhdidecid","hccefidchgiade","ejdjcgdj","cgejjaagbbgbeff","jiijigjbbcjebeba","efbidgggeajhidhcjd","ebfehhigjcchccj","gbihbehdedeiibji","jggcfhhifdbfdhjjai","addebbgajhhcf","cjjiebecchjajed","bdf","dfegfdcggfcfbcabgb","f","aede","ccegafga","ehbi","acgadeifcfagahfafj","bfegdhccah","gfg","jhggjggadh","efhabacjjgdicdihjf","gggfbfhfggfifa","egehfiaajgbgb","ihcjdbigc","gcgjgcahfaccgjd","gbffdhgffifiajdcgigf","agjdggab","jefdihahagiadedb","g","gfhjejebghjihbcifh","egdfeic","fbdajjfbegc","ihhejaeejjiicaefaa","eeaaefdejj","c","bdefegecdfaeaedghbca","hajgabeeehaicdejede","hgaf","gcgdjcejafbffagjfda","hcadgjedaeahf","eadeied","hdchajdjfdidcchjecg","ha","dchiff","fehaiaegegedijdc","ceecfjbj","h","gcdhi","ihabiaibbbjge","fehhfijb","iegidjfebjegj","ddbbjijag","gc","chhhcfag","cjigebfde","gbabdgedeifd","dijghbiecjfibbj","fccdebafbdicaecd","dhfacfedegbgggbgdc","gj","hg","idaicgfh","bbheabjch","bbjgdeidejafh","dibjegcib","bi","icdh","hffig","bceeadjbfhgb","djghjaajggbiifa","ijihajcccigfid","agdg","bf","afiacegajdjb","aihhaggijbhfhgde","hifeheagdigfd","jgfjbhgcahg","ejgfafjbj","hcgjgfjhbefbfaegg","jccehgffcafahg","ebajbhfge","hjhagadccjcgfibdi","dfijib","jadadi","gaficheffbb","dcfdcbcffdceaigccie","agffeh","hbbcgegfdejafafhb","icahahggcaeh","ad","bahbfhhaajdhgfchd","dajejcihdifig","acfh","gjgec","fdfe","cidhgjeehjghaehfaec","cgggaeefh","acfgggdfafdccfcabij","dfdjaddfifhhggfhafhi","dbbefeefdfe","fdjcfbiagadcaedcbf","igdfdcb","edigejdcbdjfd","acefajcd","cefdajgghbb","icdieejaihb","djhiibihe","gbhaeche","dahdhccfijhaigeg","die","jjjjdfjece","dj","de","cgfebhbffgffdahgddf","fdfecddeicgcaihihbfb","fhghf","igabiaj","jjehadieg","jgjfejcdgefgbfcje","hejgchigchjdagjhaddc","hjeeaejgdjbfacef","dcegghhcidehdff","fgdfdffhgdahchag","fhcagbcbciihfijae","d","bhdedjbfh","bjacbgjgejbhbhjcaaja","jcijaihjbfggcfcdb","cbefhdjaceeehb","eifeafajf","fijegbbbdcijc","fefcdbddadfagie","ifhffjhacagdj","ahfeccbfdicgf","efa","gd","fghb","jjafdfdibifabijb","djegaegahbdgjbgcdcha","cidahcjcaaaafd","gjiejbggjifdjhcaf","aebdaaagiggg","edagabd","agcgib","fggfhagbhahcahdigig","gbdhjha","abijhhjajab","agbdajhebgeaeagfgeic","iiefhe","gfiaebjehfcfgjhhad","ghdbjb","ibeeagghd","ifgifggdedbeai","bhidfebeggei","hcaefhcee","aighega","iajiadcfgbcaehabai","hefcefbhcacbjh","cedhjehiddhej","ecjahcagifeifjhgh","higggbigcigcejfeigi","acjgb","jbefaic","djh","gfcf","cjbbjeegai","gdbbiecfib","ge","ichfibcjdhfgaifbd","ajbddd","ebf","jfhi","bgjhaeab","diddgh","jciefgajiaicagfcb","hji","hjfhb","hjhjeejhbih","bdcd","acjccicbibhiddgiec","gciiejbheddfajchbjgd","adjjf","heacad","ddehjbchdeegeggcbgf","fejiibfb","gedgbighbbdahii","dgghfgjihcfffbcjgbh","jfchebbebcjjbedhib","hdbjbaeji","bhffcjeb","gbgbjeib","hcifh","jjgabijgdcc","hfigiiaieiibeffe","ebiicfjhdjdgf","jccegegffecci","ddgeeiichg","agecgd","edi","e","bai","jhbagdcehjhijj","cbaggd","hddiafjhhjhbiefhci","igehhgjcdihg","igfbaebgbgad","geifeachgg","idhcbd","j","cj","ddbcjheaid","ia","bcgehjadejbjcbbih","ebafgaidca","bbbeaieagc","cecaibccgddbdbjfjd","aaha","iegagbjabbbiecdi","jdadjdidea","aaadccbahcgcggdajfe","fije","ijbhchh","bceaeaehajcgbbcbf","iddee","dchdacahd","edbfcd","gbhfiaagfifeih","iijjhif","baihebgcagggjeb","eegdgfgefgi","dihbcfeddb","hfbgccgegfhgjibegid","jibfgibdaagajc","bajdbcacgfaegiea","gbccbfdffe","iaffabeagc","idcbe","gfabjgie","gbge","gibgcdaiegjegd","ciafbaeai","jdef","dbieaieig","jgcdfieajcg","gaibidihbbf","hgcfijffaj","cdbgfejfjahcdjg","eiaidedh","gfeegajja","ccbaddcfb","ebbhihejcicedbb","jegjdiacdgfh","ged","dhjac","dfjebaibhcfiieda","bcgjifjdijaafih","b","bhfiadeabbddijfabfji","iigffhjdajfeiejf","cahgfghjdjcjafaeace","cciaidbggbgbah","fjebfdgdcfeeejhgjf","cfjghcbggjii","bfi","fbfcaccgegcjfaeg","cddfjfe","ebjffhjjfejgfhecib","aj","fd","hffbifjdchcdibb","hffijifcaigggidgeeeg","gaabggdiihcjbhde","hjhdhbhejcgdcdga","jaccaiegdabafdj","hicjfa","jj","jdhabcihjfcbib","cagbhjig","chheebjebdhgeaeb","dcjjhgdibcihbfechch","ejbfchea","jajaffhg","fged","ejafidcac","ajheihadiiia","bfajdjgfdbighiig","fa","hfaabbeghdfhfa","afjdeiejjdfhijdeg","fhjdadd","jbgbjjbchhdj","fe","ibjdeigdfgeggfjceb","dafiggbaibghbffibj","jhdgjbdgbhch","agfeghjd","ee","ejadcefegacffj","jjdefaejheeea","eihcci","jdcbbigaaiedi","fbcffjd","fdahbceiiefhhggjb","aijgfj","afbchcjaggjhii","baeacagfbhajfc","gaichjhdhjdaaabh","jdjfgifhjjcbceiicf","hhh","igbgbfbbchhjfg","igdj","adaddbbhhfghddaa","hbjdbfhbeieecjfjac","fjfcbdaac","bddceff","chhgiggbjaajaiffdecf","cfeghfcchd","ifjgca","facief","ihaijdbjjafgagcff","gcjggajdbffbj","fjaeabbidjbdehahcb","caibbafcebgcj","cheha","cjg","abffabjahhcgcdiagid","igeb","ghajggibca","aajegbiideaj","dgeiggaifcjjicja","ihicigaahibdhghifcag","jbfejecbfjcf","bidfjbfjd","gdf","efjbggidgjihcg","gahj","hcfdfjbjhgggbfheeedc","fdhgc","hbebeb","gcef","iecfdcgheheidcedfhfa","jabia","ih","bfejjcfejdffj","hijdcieafijafgja","efhigajbaghfgejjfj","fcc","ff","dbhbbjbifiaaiedcbfj","hdhjhideidedgbgeii","fdihefiadgcajfaaf","bacahgebejcabcebfc","hhfjihedgfdagdfddc","biejeaiigbjgcgbg","hgfffbgahccigfccc","egddcdbgjgfdiga","hacgbjichg","hcah","egagfedefh","haiiiabjidafcd","caibjefjb","fjaaigijfcdhg","habbdeecbgjiehgdeb","biibihefijde","dgejachbchagegjb","hbfhadbebhahdcg","edfhdgejagcfhbjdfi","cdcebhfaadhbbc","icbfcbdihcfg","ceidejefce","hehfe","jbjdibcfahj","gebaggeddaihbgfh","gihejehfcdccid","gggdiecbbjaehai","djchgdgfehjaiefba","cgjjfahhggifedace","dfbefhdhc","ed","deehhjbcafcjeagjg","bdfeieaa","gjfgggebfa","fhaiej","headgeeijhjdijdj","ibagc","ffahdiaafhjaieghdhh","djejbf","fegghjdeb","dfefee","dajdgfeehhfh","eeccgibibcgcdeibeag","hhfbifd","fjajhdgibeaeecabia","faahg","ijhagadg","daefefd","ehdfbeibaifjebfe","hbgdf","afgacjhfibgcaj","dbcjig","hiccaihchfhih","cdjbcdfadbcehadhjha","abbdf","djj","jgaedf","bfhihf","edhha","ichddaja","dbhbdhchhjga","gjafdhgacghf","idbhdecdehfji","fiff","fc","jaajidj","cdge","bjddidcegejh","eecdigibbjjc","aiddhgcbacjdfbhg","ijcheafi","efjcdgabehfdjeee","ijdafjedccgbjidfda","jggadfeehdbjfcffccd","ae","dfgijhighb","icajfbijbjiieccj","hadciigfgifd","hcbjca","fdcjahfdjedje","hbjfgfbieghhbejeiii","ecdjeecgcfejhe","eeaggeebecjf","gifgcihdjejf","jd","cjechicbh","dggeiieabiid","ihbffhcecehgjed","dcbgidhidcegf","ifbcfaficehfbedfbh","iagecgehihdhcehhce","edejeedgg","hjdgbhgibeahgficbi","fbceebidheccdfcgff","ijhbh","hjaihhdcjgjhjf","cgdh","ibbhgheiecbeifj","ch","cjjffahjbjfjedjii","bjadefddheciece","fhhheicjfejfhjegg","bafhfcgffadccg","bfjbfac","hcbiaacfgjeiegd","aha","ij","cijcahdcdcidiiiebchi","gcjhifahfjadibjccji","fjgeiebehffiiba","cghcdbfgd","jhfedeebhibfabia","fjjci","abihbageahbihhcgjaie","ehihiahejdigfefgdfgb","hiebeejieheagbahc","ieh","bejgejhgig","gdijifcgbhffaaji","cidhcabdf","hbgig","gbfheiajjigbc","iijijhi","afddjfibjdebhejbidj","geiiacjafacfdjjgedi","fbibf","dfbbhgdece","cighgacc","id","iiggieffbfacj","gebdahjgb"]
// console.log(palindromePairs(str))
function lengthOfLongestSubstring(s) {
	let len = 0
	let arr= []
	for(let i=0; i<s.length; i++){
			if(arr.includes(s[i])){
				len = Math.max(len, arr.length)
				
				let index = arr.findIndex(it => it===s[i]) + 1
				arr.splice(0,index)
			}
			arr.push(s[i])
	}
	return  Math.max(len, arr.length)
};
// console.log(lengthOfLongestSubstring("sasasaeewew"))

let reg = /^-?\d+/g
let a =['   -42','we090','32322ssas']
a.forEach(it=> {
	it = it.trim()
	// console.log(it.match(reg))
})

var ispalindrome = function(s){
	return s.split('').reverse().join('') === s
}
var longestPalindrome = function(s) {
	if(!s || s.length===1) return s
	let str = ''
	for(let i=0; i<s.length-1;i++){
			for(let j=0;j<s.length-1;j++){
					const cur = s.substring(i,j+1)
					console.log(str,'str',i,j)
					if(ispalindrome(cur) && cur.length> str.length){
							str = cur
					}
			}
	}
	return str
};
console.log(longestPalindrome('abcdbbfcba'))