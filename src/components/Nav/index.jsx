import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
	return (
		<ul className='navigation'>
			<li className='navigation__item'>
				<NavLink to='/'>Panel</NavLink>
			</li>
			<li className='navigation__item'>
				<NavLink to='/login'>Login</NavLink>
			</li>
			<li className='navigation__item'>
				<NavLink to='/registration'>Registration</NavLink>
			</li>
		</ul>
	)
}

export default Nav
