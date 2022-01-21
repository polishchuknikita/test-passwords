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

	useEffect(() => {
		console.log(isFocusedInput, 'FOCUS')
		console.log(
			isFocusedInput ? password : password.replace(/./gm, '*'),
			'FOCUS'
		)
	}, [isFocusedInput])
	// const { ref, ...rest } = register(inputId)
	// const refInput = ref()

	// const refElement = el => {
	// 	refInput.current = el
	// }
	// console.log(register(inputId).ref(), 'reg')

	return (
		<form className='password-item' onSubmit={handleSubmit()}>
			<div className='password-item__title'>
				<span className='password-item__name-label'>
					Логин учетной записи
				</span>
				<span className='password-item__name'>{name}</span>
			</div>
			<div className='password-item__pass'>
				<span className='password-item__pass-label'>
					Пароль учетной записи
				</span>
				<input
					ref={register}
					type={'text'}
					id={inputId}
					// {...rest}
					{...register(inputId)}
					className='input'
					onFocus={() => {
						setIsFocusedInput(true)
						setValue(password)
					}}
					onBlur={() => setIsFocusedInput(false)}
					defaultValue={
						isFocusedInput ? password : password.replace(/./gm, '*')
					}
				/>
				{/* <InputItem
					inputType={'text'}
					inputId={inputId}
					register={register}
					onFocus={setIsFocusedInput}
				/> */}
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
