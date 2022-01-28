import React from 'react'

const InputItem = props => {
	const { inputType, inputId, inputPlaceholder, register } = props

	return (
		<input
			type={inputType}
			id={inputId}
			placeholder={inputPlaceholder}
			{...register(inputId)}
			className='input'
		/>
	)
}

export default InputItem
