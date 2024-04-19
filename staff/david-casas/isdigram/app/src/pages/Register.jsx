import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick}) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(showFeedback)
            
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

    return <main>
        <h1 className='font-bold font-sans text-2xl fixed top-0 bg-gray-300 w-full'>Register</h1>

        <form onSubmit={handleSubmit} className='bg-gray-100    flex flex-col'>
            <label htmlFor="name">Name</label>
            <input className='border-dashed border-2 border-indigo-600' type="text" id="name" />

            <label htmlFor="birthdate">Age</label>
            <input className='border-dashed border-2 border-indigo-600' type="date" id="birthdate" />

            <label htmlFor="email">E-mail</label>
            <input className='border-dashed border-2 border-indigo-600' type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input className='border-dashed border-2 border-indigo-600' id="username" />

            <label htmlFor="password">Password</label>
            <input className='border-dashed border-2 border-indigo-600' type="password" id="password" />

            <button className="rounded-[5px] border-[1px] border-black my-[10px] bg-[gold]" type="submit">Register</button>
        </form>

        <a className='rounded-[5px] border-[1px] border-black my-[10px] bg-slate-600x' href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register