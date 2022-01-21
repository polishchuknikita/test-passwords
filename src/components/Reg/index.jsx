import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { regConfig } from '../../config/registration'
import InputItem from '../InputItem'

const Reg = props => {
	const navigate = useNavigate()
	const {
		control,
		handleSubmit,
		register,
		formState: { errors, isDirty },
	} = useForm()
	const submitHandler = data => {
		const { regName, regPass } = data
		console.log(data, 'DATA')

		const usersLS = localStorage.getItem('users')
		if (!usersLS) {
			localStorage.setItem(
				'users',
				JSON.stringify([
					{
						id: 1,
						userName: regName,
						userPass: regPass,
						userAccounts: [],
					},
				])
			)
		} else {
			const users = JSON.parse(usersLS)
			const isAvailableUser = users.find(item => item.userName == regName)
			if (!isAvailableUser) {
				users.push({
					id: users.length + 1,
					userName: regName,
					userPass: regPass,
					userAccounts: [],
				})
				localStorage.setItem('users', JSON.stringify(users))
			} else {
				console.log(
					'тут можно вывести ошибку, что такой пользователь уже создан и логин занят)'
				)
			}
		}
		navigate('/')
	}
	return (
		<form className='form form_reg' onSubmit={handleSubmit(submitHandler)}>
			<h3 className='form-title'>Регистрация</h3>
			{regConfig.map((item, index) => (
				<InputItem
					key={item.inputId + index}
					inputType={item.inputType}
					inputId={item.inputId}
					inputPlaceholder={item.inputPlaceholder}
					register={register}
				/>
			))}
			<button className='btn btn_reg'>Зарегистрироваться</button>
		</form>
	)
}

export default Reg
