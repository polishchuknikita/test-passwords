import React, { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { passConfig } from '../../config/password'
import InputItem from '../InputItem'
import PasswordItem from '../PasswordItem'

const Panel = props => {
	const {
		control,
		handleSubmit,
		register,
		formState: { errors, isDirty },
	} = useForm()

	const usersLS = JSON.parse(localStorage.getItem('users'))
	const users = usersLS || []
	const [accountsPasswords, setAccountsPasswords] = useState(
		users?.[0]?.userAccounts || []
	)

	const submitHandlerAdd = data => {
		const { passLogin, passPass } = data
		const usersLS = JSON.parse(localStorage.getItem('users'))
		const newUsersArr = usersLS.map((item, index) =>
			index == 0
				? {
						...item,
						userAccounts: [
							...item.userAccounts,
							{
								name: passLogin,
								password: passPass,
							},
						],
				  }
				: item
		)
		if (newUsersArr) {
			localStorage.setItem('users', JSON.stringify(newUsersArr))
			setAccountsPasswords(prevState => [
				...prevState,
				{
					name: passLogin,
					password: passPass,
				},
			])
		}
	}

	const deletePass = inputId => {
		setAccountsPasswords(prevState =>
			prevState.filter(item => item.name !== inputId)
		)
	}

	useEffect(() => {
		const newUsersArr = usersLS?.map((item, index) =>
			index === 0
				? {
						...item,
						userAccounts: accountsPasswords,
				  }
				: item
		)
		if (newUsersArr) {
			localStorage.setItem('users', JSON.stringify(newUsersArr))
		}
	}, [accountsPasswords])
	return (
		<div className='panel'>
			{accountsPasswords.length ? (
				accountsPasswords.map((item, index) => (
					<PasswordItem
						key={index}
						inputId={item.name}
						password={item.password}
						name={item.name}
						deleteCallBack={deletePass}
					/>
				))
			) : (
				<span>У вас ещё не создана учетная запись</span>
			)}
			<form
				className='form form_panel'
				onSubmit={handleSubmit(submitHandlerAdd)}
			>
				{passConfig.map((item, index) => (
					<InputItem
						key={item.inputId + index}
						inputType={item.inputType}
						inputId={item.inputId}
						inputPlaceholder={item.inputPlaceholder}
						register={register}
					/>
				))}
				<button className='btn btn_addAccount'>Добавить аккаунт</button>
			</form>
		</div>
	)
}

export default Panel
