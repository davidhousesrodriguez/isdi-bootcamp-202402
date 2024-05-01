import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', email, password)

        try {
            logic.loginUser(email, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

    return (
   <main className='flex flex-col items-center justify-center min-h-screen bg-orange-100'>
               
        <div className='my-20'>
        <img className='w-[100px]' src="../../public/LOGO.png" alt="" />
        </div>
        
        <form className="flex justify-items-center flex-col p-2 mb-20" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input className='rounded-lg p-1 border-2 ' id="email" />
 
            <label htmlFor="password">Password</label>
            <input className='rounded-lg p-1 border-2'  type="password" id="password" />

            <button type="submit">Login</button>
        </form>

        <a className="font-sans font-semibold grid justify-items-right"href="" onClick={handleRegisterClick}>Register</a>
    
    
   
</main>
)
}

export default Login