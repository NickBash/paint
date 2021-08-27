import React, {useEffect, useRef} from 'react';
import '../styles/canvas.css'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import {useParams} from "react-router-dom"
import Brush from "../tools/Brush";
import toolState from "../store/toolState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const Canvas = observer(() => {
	const canvasRef = useRef()
	const params = useParams()

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
	}, [])

	useEffect(() => {
		if (canvasState.username) {
			const socket = new WebSocket(`ws://localhost:5000/`)
			canvasState.setSocket(socket)
			canvasState.setId(params.id)
			toolState.setTool(new Brush(canvasState.canvas, socket, params.id))
			socket.onopen= () => {
				console.log('Подключение установлено')
				socket.send(JSON.stringify({
					id: params.id,
					username: canvasState.username,
					method: "connection"
				}))
			}
			socket.onmessage = (event) => {
				const msg = JSON.parse(event.data)
				switch (msg.method) {
					case "connection":
						console.log(`пользователь ${msg.username} присоединился`)
						break
					case "draw":
						drawHandler(msg)
						break
					default:
						break
				}
			}
		}
	}, [canvasState.username])

	const drawHandler = (msg) => {
		const figure = msg.figure
		const ctx = canvasRef.current.getContext('2d')
		switch (figure.type) {
			case "brush":
				Brush.draw(ctx, figure.x, figure.y, figure.colorBorder, figure.lineWidth)
				break
			case "rect":
				Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height, figure.colorBorder, figure.colorBack)
				break
			case "line":
				Line.staticDraw(ctx, figure.x, figure.y, figure.currentX, figure.currentY, figure.color)
				break
			case "eraser":
				Eraser.draw(ctx, figure.x, figure.y, figure.color)
				break
			case "circle":
				Circle.staticDraw(ctx, figure.x, figure.y, figure.r, figure.colorBorder, figure.colorBack)
				break
			case "finish":
				ctx.beginPath()
				break
			default:
				break
		}
	}

	return (
		<div>
			<canvas ref={canvasRef} className='flex mb-4' width={800} height={600} />
		</div>
	);
});

export default Canvas;
