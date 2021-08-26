import React, {useRef, useState} from 'react';
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import canvasState from "../store/canvasState";

const Modal = () => {
	const [modal, setModal] = useState(true)
	const usernameRef = useRef()

	const connectHandler = () => {
		canvasState.setUsername(usernameRef.current.value)
		setModal(false)
	}

	return (
			<Dialog
				header="Ваше имя"
				onHide={() => false}
				visible={modal}
				style={{width: '50vw'}}>
				<InputText className="my-2 min-w-full" type="text" ref={usernameRef}/>
				<div className="text-center mt-3">
					<Button label="Войти" onClick={() => connectHandler()} autoFocus/>
				</div>
			</Dialog>
	);
};

export default Modal;
