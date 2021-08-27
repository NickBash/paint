import React, {useEffect, useRef} from 'react';
import '../styles/canvas.css'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";

const Canvas = observer(() => {
	const canvasRef = useRef()

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
	}, [])

	const mouseDownHandler = () => {
		canvasState.pushToUndo(canvasRef.current.toDataURL())
	}

	return (
		<div>
			<canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} className='flex mb-4' width={800} height={600} />
		</div>
	);
});

export default Canvas;
