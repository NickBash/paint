import React, {useState} from 'react';
import {MegaMenu} from "primereact/megamenu";
import {ColorPicker} from "primereact/colorpicker";
import toolState from "../store/toolState";
import {Slider} from 'primereact/slider';

import '../styles/menu.css'
import {InputText} from "primereact/inputtext";

const Menu = () => {
	const [value, setValue] = useState(1)

	return (
		<MegaMenu className='absolute top-0 min-w-full text-center' orientation="horizontal">
			<span className='mr-2'>Цвет линии/границы</span>
			<ColorPicker defaultColor='000000' onChange={(e) => toolState.setStrokeColor('#' + e.value)} />
			<span className='mr-2 ml-4'>Цвет заливки</span>
			<ColorPicker defaultColor='000000' onChange={(e) => toolState.setFillStyle('#' + e.value)} />
			<span className='mr-2 ml-4'>Толщина линии</span>
			<div className='slider ml-3'>
				<InputText className='min-w-full' min={1} max={50} type='number' value={value} onChange={(e) => {
					setValue(e.target.value)
					toolState.setLineWidth(e.target.value)
				}} />
				<Slider min={1} max={50} value={value} onChange={(e) => {
					setValue(e.value)
					toolState.setLineWidth(e.value)
				}} />
			</div>
		</MegaMenu>
	);
};

export default Menu;
