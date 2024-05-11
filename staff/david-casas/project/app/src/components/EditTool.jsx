import { logger } from '../utils'

import CancelButton from './library/CancelButton'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'



import { useContext } from '../context'

function EditTool(props) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const tool = event.target

        const description = form.description.value

        logger.debug('EditTool -> handleSubmit', description)

        try {
            logic.modifyTool(props.tool.id, description)
                .then(() => {
                    form.reset()

                    props.onToolEdited()
                })
                .catch(error => showFeedback(error),'error')
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => props.onCancelClick()

    logger.debug('EditTool -> render')

    return <section className='edit-tool'>
        <form onSubmit={handleSubmit}>
            <label>Description</label>
            <input id="text" type="text" defaultValue={props.tool.description} />

            <SubmitButton>Save</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick}></CancelButton>
    </section>
}

export default EditTool