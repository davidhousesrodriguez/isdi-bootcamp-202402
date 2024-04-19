import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick}) {

        const { showFeedback} = useContext()

        const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => showFeedback(error.message, 'error'))
        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

    return <main>
        <h1 className='font-bold font-sans text-2xl fixed top-0 bg-gray-300 w-full'>Login</h1>
        
        <form className='bg-gray-100 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input className='border-dashed border-2 border-indigo-600' id="username" />

            <label htmlFor="password">Password</label>
            <input className='border-dashed border-2 border-indigo-600' type="password" id="password" />

            <button className="rounded-[5px] border-[1px] border-black my-[10px] bg-[gold]" type="submit">Login</button>
        </form>

        <a className='rounded-[5px] border-[1px] border-black my-[10px] bg-slate-600x' href="" onClick={handleRegisterClick}>Register</a>
    </main>
}

export default Login