class Notify {
	constructor(){
		this.subscribers = []
	}

	add(handle){
		console.log('add')
		this.subscribers.push(handle)
	}

	emit(){
		console.log('emit')
		this.subscribers.forEach(subscriber=> subscriber())
	}
}

const notify = new Notify()

notify.add(()=>console.log('emit here'))



const notify2 = new Notify()

notify2.add(()=>console.log('emit here2'))

// notify2.emit()
notify2.emit()