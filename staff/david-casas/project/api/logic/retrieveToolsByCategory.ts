
import { ObjectId, Schema } from "mongoose"
const { Types: { ObjectId } } = Schema

import { Tool, Category, User } from "../data/index.ts"

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

function retrieveToolsByCategory(userId: string, categoryId: string): Promise<[{ image: String, category: String, description: String, address: String, location: Number, available: Boolean, date: Date }] | { image: String, category: String, description: String, address: String, location: Number, available: Boolean, date: Date }[] | any> {
    validate.text(userId, 'UserId', true)


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {

            if (!user) throw new NotFoundError('user not found')

            return Tool.find({ category: categoryId }).lean()
                .catch(error => { throw new SystemError(error.message) })

                .then(tools => {

                    return tools.map(({ _id, owner, image, category, description, address, location, available, date: Date }) => ({

                        id: _id.toString(),
                        owner: userId,
                        image: image,
                        category: category,
                        description: description,
                        address: address,
                        location: location,
                        available: available,
                        date: Date

                    })).reverse()
                }
                )
        })
}

export default retrieveToolsByCategory