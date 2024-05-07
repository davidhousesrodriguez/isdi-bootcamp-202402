import { validate, errors } from 'com'

function createTool(image, category, description, address, location, available, date) {
    validate.url(image, 'image')
    validate.text(category, 'category')
    validate.text(description, 'description')
    validate.text(address, 'address')
    validate.token(sessionStorage.token)

    const tool = { image, category, description, address, location, available, date }

    const json = JSON.stringify(tool)

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