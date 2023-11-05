import { useState, useRef } from 'react'
import './ComponenteCambio.scss'

const ComponenteCambio = () => {

	const [ activo, setActivo ] = useState(false)
	const buttonRef = useRef(null)

	const cambiaState = () => setActivo( prevActivo => !prevActivo )
	const obtenInfo = () => {
		const target = buttonRef.current;
		console.log(target);
	}

	return <button
				onClick={ cambiaState }
				onMouseEnter={ obtenInfo }
				ref={ buttonRef }
				className={ activo ? 'encendido' : 'apagado'}
			>
				{ activo ? 'Encendido' : 'Apagado' }
			</button>

}

export default ComponenteCambio