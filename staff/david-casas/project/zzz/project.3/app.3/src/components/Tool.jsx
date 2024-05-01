import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Tool({ item: tool, onEditClick, onDeleted }) {
    const { showFeedback, showConfirm } = useContext()

    const handleDeleteClick = toolId =>
        showConfirm('delete tool?', confirmed => {
            if (confirmed)
                try {
                    logic.removeTool(toolId)
                        .then(() => onDeleted())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
        })

    const handleEditClick = tool => onEditClick(tool)

    logger.debug('Tool -> render')

    return <article>
        <h3><Link to={`/profile/${tool.owner.name}`}>{tool.owner.name}</Link></h3>
        <h3><Link to={`/CategoryList/${tool.owner.name}`}>{tool.owner.name}</Link></h3>

        <img src={tool.image} />

        {/*deberia meter la categoria??*/}
        <p>{tool.description}</p>
        

        <time>{new Date(tool.date).toLocaleDateString('en-CA')}</time>

        {logic.getLoggedInUserId() === tool.owner.id && <>
            <button onClick={() => handleDeleteClick(tool.id)}>🗑️</button>
            <button onClick={() => handleEditClick(tool)}>📝</button>
        </>}
    </article>
}

export default Tool