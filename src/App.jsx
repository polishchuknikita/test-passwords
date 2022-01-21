import logo from './logo.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Reg from './components/Reg'
import Panel from './components/Panel'
import Nav from './components/Nav'

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<Nav />
			</header>

			<Routes>
				<Route path='/' element={<Panel />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Reg />} />
			</Routes>
		</div>
	)
}

export default App
