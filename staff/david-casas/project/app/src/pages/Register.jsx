import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

    return (    
    <main className='flex flex-col items-center justify-center min-h-screen bg-orange-100'>
    
      <div className='my-10'>
        <img className='w-[100px]' src="../../public/LOGO.png" alt="" /> 
        </div>

        <form className="flex justify-items-center flex-col p-2 " onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className='rounded-lg p-1 border-2' type="text" id="name" />

            <label htmlFor="email">E-mail</label>
            <input className='rounded-lg p-1 border-2' type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input className='rounded-lg p-1 border-2' id="username" />

            <label htmlFor="password">Password</label>
            <input className='rounded-lg p-1 border-2' type="password" id="password" />

            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleLoginClick}>Login</a>
    </main>
    
    )
}

export default Register