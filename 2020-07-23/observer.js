class Subject {
	constructor(){
		this.Observers = []
	}

	add(handler){
		this.Observers.push(handler)
	}

	remove(handler){
		this.Observers = this.Observers.filter(item=> item !== handler)
	}

	notify(){
		this.Observers.forEach(observer=>{
			observer.update()
		})
	}
}

class Observer {
	constructor(name){
		this.name = name
	}
	update(){
		console.log(`${this.name} update is running`)
	}
}

const main = new Subject()
const ob1 = new Observer('ob1')
const ob2 = new Observer('ob2')

main.add(ob1)
main.add(ob2)

main.notify()

main.remove(ob1)

main.notify()