import { validate, errors } from 'com'

function createTool(image, text) {
    validate.url(image, 'image')
    if(text)
        validate.text(text, 'text')
    validate.token(sessionStorage.token)

    const add = { image, text }

    const json = JSON.stringify(add)

    return fetch(`${import.meta.env.VITE_API_URL}/tools`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json' 
        },
        body: json
    })
        .then(res => {
            if(res.status === 201) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })

}

export default createTool