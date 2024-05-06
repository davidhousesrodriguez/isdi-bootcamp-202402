import mongoose from 'mongoose'
import { validate, errors } from 'com'
import { User, Tool, Category } from '../data/index.ts'

import { ObjectId } from 'mongoose'

const { Types: { ObjectId}} = mongoose

const { SystemError, NotFoundError } = errors

async function createTool(userId: string, image: string, category: string, description: string, address: String, location: number, available: Boolean, date): Promise<void> {
    
    validate.text(userId, 'userId', true)
    validate.url(image, 'image')
    validate.text(description, 'description')
    validate.text(address, 'address')
    validate.date(date, 'date')
   

    return User.findById(userId)
    .catch(error => { throw new SystemError(error.message) })
    .then(user => {
        if (!user)
            throw new NotFoundError('user not found')
        const tool = {
            owner: user._id,
            image,
            category,
            description,
            location,
            available, 
            date: Date
        }
        return Tool.create(tool)
            .catch(error => { throw new Error(error.message) })

            .then(tool => { })
    })
    
}

export default createTool