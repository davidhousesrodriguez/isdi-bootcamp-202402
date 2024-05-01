import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Add({ item: add, onEditClick, onDeleted }) {
    const { showFeedback, showConfirm } = useContext()

    const handleDeleteClick = addId =>
        showConfirm('delete add?', confirmed => {
            if (confirmed)
                try {
                    logic.removeAdd(addId)
                        .then(() => onDeleted())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
        })

    const handleEditClick = add => onEditClick(add)

    logger.debug('Add -> render')

    return <article>
        <h3><Link to={`/profile/${add.author.username}`}>{add.author.username}</Link></h3>

        <img src={add.image} />

        <p>{add.text}</p>

        <time>{new Date(add.date).toLocaleString('en-CA')}</time>

        {logic.getLoggedInUserId() === add.author.id && <>
            <button onClick={() => handleDeleteClick(add.id)}>🗑️</button>
            <button onClick={() => handleEditClick(add)}>📝</button>
        </>}
    </article>
}

export default Add