import React, {useEffect, useRef} from 'react';
import '../styles/canvas.css'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";

const Canvas = observer(() => {
	const canvasRef = useRef()

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
	}, [])

	return (
		<div>
			<canvas ref={canvasRef} className='flex mb-4' width={800} height={600} />
		</div>
	);
});

export default Canvas;
