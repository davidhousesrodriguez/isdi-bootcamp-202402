import { logger } from '../utils'

import CancelButton from './library/CancelButton'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'

import { useContext } from '../context'

function CreateTool(props) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const category = form.category.value
        const address = form.address.value
        const description = form.description.value
        const location = form.location.value
        const available = form.available.value
        const date = form.date.value
        
        try {
            logic.createTool(image, category, description, address, location, available, date)
                .then(() => {
                    form.reset()

                    props.onToolCreated()
                })
                .catch(error => showFeedback(error, 'error'))
        }catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => props.onCancelCLick()

    logger.debug('CreateTool -> render')

    return <section className="mb-[50px] fixed bottom-0 left-0 bg-white w-full box-border p-[5vw]">
        <form onSubmit={handleSubmit} className= "flex flex-col">
            <label >Image</label>
            <input className='rounded-lg p-1 border-2' id="image"type="text" />

            <label >Category</label>
            <input className='rounded-lg p-1 border-2' id = "category" type="text" />

            <label >Description</label>
            <input className='rounded-lg p-1 border-2' id = "description" type="text" />

            <label >Address</label>
            <input className='rounded-lg p-1 border-2'id ="address" type="text" />

            <label >Location</label>
            <input className='rounded-lg p-1 border-2' id="location" type="text" />

            <label>Available</label>
            <input className='rounded-lg p-1 border-2' id="available" type="boolean" />

            <label>Date</label>
            <input className='rounded-lg p-1 border-2' id="date" type="Date" />

            <SubmitButton>Create</SubmitButton>
        </form>   

        <CancelButton onClick={handleCancelClick} />
        </section>
}       

export default CreateTool