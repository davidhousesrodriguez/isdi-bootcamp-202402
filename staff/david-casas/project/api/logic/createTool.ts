import { validate, errors } from 'com'
import { User, Tool } from '../data/index.ts'

const { SystemError, NotFoundError } = errors

function createTool(userId: string, image: string, description: string, location: string, Date): Promise<void> {
    validate.text(userId, 'userId', true)
    //validate url or image.png
    validate.url(image, 'image')
    validate.text(description, 'description')
    //validate location should use a previous location in map at the add creation e

    return User.findById(userId)
    .catch(error => { throw new SystemError(error.message) })
    .then(user => {
        if (!user)
            throw new NotFoundError('user not found')

        return Tool.create({ author: user._id, image, description, location, date: new Date })
            .catch(error => { throw new SystemError(error.message)})
    })
    .then(tool => { })
}

export default createTool