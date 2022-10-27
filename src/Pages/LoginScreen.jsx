import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './styles/loginScreen.css'

const LoginScreen = () => {

    const {handleSubmit, register, reset} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.data.token)
            setIsLogged(true)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
        
    }, [])
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
      }
    

    if (isLogged) {
        return (
            <div className='login__container'>
                <h2 className='login__title'>User logged correctly</h2>
                <button className='logout__btn' onClick={handleLogout}>
                    Logout
                </button>
                <Link to='/'>Go back Home</Link>
            </div>
        )
    }

  return (
    <div className='login__card'>
        <div className='login__card-all'>
        <h3 className='login__text'>Welcome! Enter your email and password to continue</h3>
        <form className='login__form' onSubmit={handleSubmit(submit)}>
            <div className='login__email'>
                <label className='login__label' htmlFor="email">Email</label>
                <input className='login__input' type="email" id='email' {...register('email')} />
            </div>
            <div className='login__pasword'>
                <label className='login__label' htmlFor="password">Password</label>
                <input className='login__input' type="password" id='password' {...register('password')} />
            </div>
            <button className='login__btn'>Login</button>
        </form>
        </div>
    </div>
  )
}

export default LoginScreen