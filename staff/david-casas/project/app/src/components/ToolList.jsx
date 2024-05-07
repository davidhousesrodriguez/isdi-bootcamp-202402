import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
import Tool from './Tool'

import { useContext } from '../context'
import { NotFoundError } from 'com/errors'

function ToolList({ stamp, categoryId, onEditToolClick }) {
    const [tools, setTools] = useState([])

    const { showFeedback } = useContext()

    const loadTools = () => {
        logger.debug('ToolList -> loadTools')

        try {
            if (categoryId) {

                logic.retrieveToolsByCategory(categoryId)
                    .then((tools) => setTools(tools))
                    .catch((error) => showFeedback(error, 'error'))

            } else {
                logic.retrieveTools()
                    .then(setTools)
                    .catch(error => showFeedback(error, 'error'))

            }
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadTools()
    }, [stamp, categoryId])

    const handleToolDeleted = () => loadTools()

    const handleEditClick = tool => onEditToolClick(tool)

    logger.debug('ToolList -> render')

    return (
        <div className=''>
            <section className='grid grid-cols-2 gap-4 '>
                {tools.map(tool => <Tool key={tool.id} item={tool} onEditClick={handleEditClick} onDeleted={handleToolDeleted} />)}
            </section>
        </div>
    )
}
export default ToolList