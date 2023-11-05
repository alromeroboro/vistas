import { useEffect } from 'react'

const ComponenteMontado = () => {

	useEffect(() => {
		console.log('Se ha monatdo el componente');
	}, [])

	return (
		<div>ComponenteMontado</div>
	)
}

export default ComponenteMontado