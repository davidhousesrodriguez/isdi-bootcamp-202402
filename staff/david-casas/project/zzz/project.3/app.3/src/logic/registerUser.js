import { validate, errors } from 'com'

function registerUser(name, surname, email, password, telephone) {
    validate.text(name, 'name')
    validate.text(surname, 'surname')
    validate.email(email)
    validate.password(password)

    const user = { name, surname, email, password, telephone }

    const json = JSON.stringify(user)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method:'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(res => {
            if( res.status === 201) return 

            return res.json()
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default registerUser