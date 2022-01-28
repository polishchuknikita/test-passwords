import React, { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useEffect } from 'react/cjs/react.development'
import InputItem from '../InputItem'

const PasswordItem = props => {
	const { name, inputId, deleteCallBack, password } = props
	const [isFocusedInput, setIsFocusedInput] = useState(false)
	const {
		control,
		handleSubmit,
		register,
		setValue,
		formState: { errors, isDirty },
	} = useForm()

	const submitForm = data => {
		const usersLS = JSON.parse(localStorage.getItem('users'))
		const newArrUsersPassword = usersLS[0].userAccounts.map((item, index) => {
			for (const [key, value] of Object.entries(data)) {
				if (key == item.name) {
					return {
						...item,
						password: value,
					}
				} else {
					return item
				}
			}
		})
		localStorage.setItem(
			'users',
			JSON.stringify([{ ...usersLS[0], userAccounts: newArrUsersPassword }])
		)
	}

	return (
		<form className='password-item' onSubmit={handleSubmit(submitForm)}>
			<div className='password-item__title'>
				<span className='password-item__name-label'>Логин учетной записи</span>
				<span className='password-item__name'>{name}</span>
			</div>
			<div className='password-item__pass'>
				<span className='password-item__pass-label'>Пароль учетной записи</span>
				<input
					ref={register}
					type={isFocusedInput ? 'text' : 'password'}
					id={inputId}
					{...register(inputId)}
					className='input'
					onFocus={() => {
						setIsFocusedInput(true)
						setValue(password)
					}}
					onBlur={() => setIsFocusedInput(false)}
					defaultValue={password}
				/>
			</div>
			<button className='btn btn_pass-item'>Сохранить изменения</button>
			<button
				type='button'
				className='btn-pass-delete'
				onClick={() => deleteCallBack(inputId)}
			>
				Удалить
			</button>
		</form>
	)
}

export default PasswordItem
