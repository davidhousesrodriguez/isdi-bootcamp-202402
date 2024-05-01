import { Schema } from "mongoose"
import { Tool, Category, User } from "../data/index.ts"
const { Types: { ObjectId} } = Schema

import { validate, errors } from 'com'

const { NotFoundError, SystemError} = errors

async function retrieveToolsByCategory( userId: string, categoryId: '' ): Promise<[{ image: String, category: String, description: String, address: String, location: Number, available: Boolean, date: Date }] | { image: String, category: String, description: String, address: String, location: Number, available: Boolean, date: Date } [] | any> {
    validate.text(userId, 'UserId', true)
    console.log(categoryId)
    return User.findById( userId )
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {

            if (!user) throw new NotFoundError('user not found')

            return Tool.find({ category: categoryId}).lean()
                .catch(error => { throw new SystemError(error.message) })

                .then(tools => {

                    return tools.map(({ _id, owner, image, category, description, address, location, available, date }) => ({
                        id: _id.toString(),
                        owner: userId,
                        image: image,
                        category: category,
                        description: description,
                        address: address, 
                        location: location,
                        available: available,
                        date : Date
                        
                    })).reverse()
                }
            )
        })
}        


export default retrieveToolsByCategory