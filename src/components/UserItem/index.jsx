import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import InputItem from '../InputItem'

const UserItem = props => {
	const { userName, inputId, inputPlaceholder, register } = props

	return (
		<form className='user'>
			<span className='user__name'>{userName}</span>
			<InputItem
				inputType='text'
				inputId={inputId}
				inputPlaceholder={inputPlaceholder}
				register={register}
			/>
		</form>
	)
}

export default UserItem
