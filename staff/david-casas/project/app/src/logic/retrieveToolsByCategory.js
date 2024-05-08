import { validate, errors } from 'com'

function retrieveToolsByCategory(categoryId) {
   
    validate.token(sessionStorage.token)
    
    return fetch(`${import.meta.env.VITE_API_URL}/tools/categories/${categoryId}`, {

        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`
        }
    })
        .then(res => {
            if(res.status === 200)
                return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })

}

export default retrieveToolsByCategory