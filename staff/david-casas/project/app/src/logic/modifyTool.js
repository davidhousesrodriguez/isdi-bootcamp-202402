import { validate, errors } from 'com'

function modifyTool(toolId, image, category, description, address, location, date) {
    validate.text(toolId, 'toolId', true)
    validate.url(image, 'image')
    validate.text(category, 'category')
    validate.text(description, 'description')
    validate.text(address, 'address')
    validate.text(location, 'location')
    validate.date(date, 'date')

    const tool = { image, category, description, address, location, date}

    const json = JSON.stringify(tool)

    return fetch(`${import.meta.env.VITE_API_URL}/tools/modify/${toolId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
    },
    body: json
})

    .then(res => {
        if (res.status === 200) return

        return res.json()
            .then(body => {
                const { error, message } = body

                const constructor = errors[error]

                throw new constructor(message)
            })
    })

}

export default modifyTool