import React, {useEffect} from 'react';
import {Dock} from 'primereact/dock';

import brush from '../assets/img/paint-brush.svg'
import rect from '../assets/img/rectangle.svg'
import eraser from '../assets/img/eraser.svg'
import line from '../assets/img/line.svg'
import circle from '../assets/img/circle.svg'
import Brush from "../tools/Brush";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import {Tooltip} from "primereact/tooltip";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const ToolBar = () => {
	const items = [
		{
			label: 'Кисточка',
			icon: () => <img className='cursor-pointer' alt="Brush" src={brush} width='100%'/>,
			command: () => {
				toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.id))
			}
		},
		{
			label: 'Прямоугольник',
			icon: () => <img className='cursor-pointer' alt="Rectangle" src={rect} width="100%"/>,
			command: () => {
				toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.id))
			}
		},
		{
			label: 'Круг',
			icon: () => <img className='cursor-pointer' alt="Circle" src={circle} width="100%"/>,
			command: () => {
				toolState.setTool(new Circle(canvasState.canvas, canvasState.socket, canvasState.id))
			}
		},
		{
			label: 'Линия',
			icon: () => <img className='cursor-pointer' alt="Line" src={line} width="100%"/>,
			command: () => {
				toolState.setTool(new Line(canvasState.canvas, canvasState.socket, canvasState.id))
			}
		},
		{
			label: 'Ластик',
			icon: () => <img className='cursor-pointer' alt="Eraser" src={eraser} width="100%"/>,
			command: () => {
				toolState.setTool(new Eraser(canvasState.canvas, canvasState.socket, canvasState.id))
			}
		},
	];

	return (
		<>
			<Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+27 bottom-15" at="center top"
							 showDelay={150}/>
			<div className="dock-window dock-advanced">
				<Dock model={items} position="bottom"/>
			</div>
		</>
	);
};

export default ToolBar;
