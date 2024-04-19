import { logger } from '../utils'

import CancelButton from './library/CancelButton'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'

import './EditPost.sass'

import { useContext } from '../context'

function EditPost(props) {
    const { showFeedback } = userContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        logger.debug('EditPost -> handleSubmit', text)

        try {
            logic.modifyPost(props.post.id, text)
            .then(() => {
                form.reset()
    
                props.onPostEdited()

            })

        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleCancelClick = () => props.onCancelClick()

        logger.debug('EditPost -> render')

        return <section className="mb-[50px] fixed bottom-0 left-0 bg-white w-[100vh] box-border p-[5vw] ">
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label>Text</label>
                <input id="text" type="text" defaultValue={props.post.text} />

                <SubmitButton>Save</SubmitButton>
            </form>

            <CancelButton onClick={handleCancelClick} />
        </section>
    }

export default EditPost
