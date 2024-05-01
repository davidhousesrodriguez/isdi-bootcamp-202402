import { logger } from '../utils'

import CancelButton from './library/CancelButton'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'

import './EditPost.sass'

import { useContext } from '../context'

function EditAdd(props) {
    const { showFeedback } = userContext()

    const handleSubmit = event => {
        event.preventDefault()

        const add = event.target

        const text = form.text.value

        logger.debug('EditAdd -> handleSubmit', text)

        try {
            logic.modifyAdd(props.add.id, text)
                .then(() => {
                    form.reset()

                    props.onAddEdited()
                })
                .catch(error => showFeedback(error),'error')
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => props.onCancelClick()

    logger.debug('EditPost -> render')

    return <section className='edit-post'>
        <form onSubmit={handleSubmit}>
            <label>Text</label>
            <input id="text" type="text" defaultValue={props.add.text} />

            <SubmitButton>Save</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick}></CancelButton>
    </section>
}

export default EditAdd