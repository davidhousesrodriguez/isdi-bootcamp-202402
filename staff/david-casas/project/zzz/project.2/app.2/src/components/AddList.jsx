import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
import Add from './Add'

import { useContext } from '../context'

function AddList({ stamp, onEditAddClick }) {
    const[adds, setAdds] = useState([])

    const { showFeedback } = useContext()

    const loadAdds = () => {
        logger.debug('AddList -> loadAdds')

        try {
            logic.retrieveAdds()
            .then(setAdds)
            .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadAdds()
    }, [stamp])

    const handleAddDeleted = () => loadAdds()

    const handleEditClick = add => onEditAddClick(add)

    logger.debug('AddList -> render')

    return (
        <div className=''>
    <section className='grid grid-cols-2 gap-4 '>
        {adds.map(add => <Add key={add.id} item={add} onEditClick={handleEditClick} onDeleted={handleAddDeleted} />)}
    </section>
    </div>
    )
}
export default AddList