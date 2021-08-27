import {makeAutoObservable} from "mobx";

class toolState {
	tool = null
	strokeStyle = '#000000'
	fillStyle = '#000000'
	lineWidth = 1

	constructor() {
		makeAutoObservable(this)
	}

	setTool(tool) {
		this.tool = tool
	}

	setFillStyle(color) {
		this.tool.fillColor = color
		this.fillStyle = color
	}

	setStrokeColor(color) {
		this.tool.strokeColor = color
		this.strokeStyle = color
	}

	setLineWidth(width) {
		this.tool.lineWidth = width
		this.lineWidth = width
	}
}

export default new toolState()
