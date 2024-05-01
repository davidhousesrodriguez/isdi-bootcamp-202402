import { Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { User, Category } from '../data/index.ts'

import { validate,  errors } from 'com'

const { SystemError, NotFoundError } = errors

function retrieveCategories(userId: string): Promise<[{ name: string }] | { name: string }[] | any> {

    validate.text(userId, 'userId', true)
    
    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Category.find().lean().exec()
                .catch(error => { throw new SystemError(error.message) })
        })
}

export default retrieveCategories