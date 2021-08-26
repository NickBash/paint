import {makeAutoObservable} from "mobx";

class CanvasState {
	canvas = null
	id = null
	socket = null
	username = ""

	constructor() {
		makeAutoObservable(this)
	}

	setCanvas(canvas) {
		this.canvas = canvas
	}

	setId(id) {
		this.id = id
	}

	setSocket(socket) {
		this.socket = socket
	}

	setUsername(username) {
		this.username = username
	}
}

export default new CanvasState()
