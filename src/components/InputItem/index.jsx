import React from 'react'

const InputItem = props => {
	const { inputType, inputId, inputPlaceholder, register, onFocus } = props

	return (
		<input
			type={inputType}
			id={inputId}
			placeholder={inputPlaceholder}
			{...register(inputId)}
			className='input'
			onFocus={onFocus(true)}
			onBlur={onFocus(false)}
		/>
	)
}

export default InputItem
