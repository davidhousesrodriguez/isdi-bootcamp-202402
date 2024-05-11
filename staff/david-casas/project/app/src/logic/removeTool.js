import { validate, errors } from 'com';

function removeTool(toolId) {
    validate.text(toolId, 'toolId', true)
    validate.token(sessionStorage.token)

    return fetch(`${import.meta.env.VITE_API_URL}/tools/${toolId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
        }
    })
    .then(res => {
        if (res.status === 200)
            return res.json()

            .then(body => {
                const { error, message } = body

                const constructor = errors[error]

                throw new constructor(message)
            })
})
}

export default removeTool