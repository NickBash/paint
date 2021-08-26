import {makeAutoObservable} from "mobx";

class toolState {
	tool = null

	constructor() {
		makeAutoObservable(this)
	}

	setTool(tool) {
		this.tool = tool
	}

	setFillStyle(color) {
		this.tool.fillColor = color
	}

	setStrokeColor(color) {
		this.tool.strokeColor = color
	}

	setLineWidth(width) {
		this.tool.lineWidth = width
	}
}

export default new toolState()
