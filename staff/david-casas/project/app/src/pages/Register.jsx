import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const surname = form.surname.value
        const email = form.email.value
        const password = form.password.value
        const telephone = form.telephone.value

        try {
            logic.registerUser(name, surname, email, password, telephone)
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
    <main className='flex flex-col items-center justify-center min-h-screen bg-[#FFBB70]'>
    
      <div className='my-10'>
        <img className='w-[100px]' src="../../public/LOGO.png" alt="" /> 
        </div>

        <form className="flex justify-items-center flex-col p-2 " onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className='rounded-lg p-1 border-2' type="text" id="name" />

            <label htmlFor="surname">Surname</label>
            <input className='rounded-lg p-1 border-2' type="text" id="surname" />

            <label htmlFor="email">E-mail</label>
            <input className='rounded-lg p-1 border-2' type="email" id="email" />

            <label htmlFor="password">Password</label>
            <input className='rounded-lg p-1 border-2' type="password" id="password" />

            <label htmlFor="telephone">Telephone</label>
            <input className='rounded-lg p-1 border-2' type="tel" id="telephone" />

            <button className='border-2' type="submit">Register</button>
        </form>

        <a className='border-2' href="" onClick={handleLoginClick}>Login</a>
    </main>
    
    )
}

export default Register