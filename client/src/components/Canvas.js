import React, {useEffect, useRef} from 'react';
import '../styles/canvas.css'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import {useParams} from "react-router-dom"

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
				}
			}
		}
	}, [canvasState.username])

	const drawHandler = (msg) => {

	}

	return (
		<div>
			<canvas ref={canvasRef} className='flex mb-4' width={800} height={600} />
		</div>
	);
});

export default Canvas;
