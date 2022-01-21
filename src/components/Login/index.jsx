import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginConfig } from '../../config/login'
import InputItem from '../InputItem'

const Login = props => {
	const navigate = useNavigate()
	const {
		control,
		handleSubmit,
		register,
		formState: { errors, isDirty },
	} = useForm()
	const submitHandler = data => {
		// navigate('/')
		const { loginName, loginPass } = data
		console.log(loginName, loginPass, 'DATA')
	}
	return (
		<form
			className='form form_login'
			onSubmit={handleSubmit(submitHandler)}
		>
			<h3 className='form-title'>Вход</h3>
			{loginConfig.map((item, index) => (
				<InputItem
					key={item.inputId + index}
					inputType={item.inputType}
					inputId={item.inputId}
					inputPlaceholder={item.inputPlaceholder}
					register={register}
				/>
			))}
			<button className='btn btn_login'>Добавить аккаунт</button>
		</form>
	)
}

export default Login
