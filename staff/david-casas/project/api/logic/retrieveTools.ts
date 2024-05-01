import { Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { User, Tool } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveTools(userId: string): Promise<[{ image: String, category: String, description: String, address: String, location: Number, available: Boolean, date: Date }] | { image: String, category: String, description: String, address: String, location: Number, available: Boolean, date: Date } [] | any> {

    validate.text(userId, 'userId', true)
    

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Tool.find()
            .populate({ path: 'category', select: 'name' })
            .lean()
            .exec()
                .catch(error => { throw new SystemError(error.message)})
        })
}

export default retrieveTools