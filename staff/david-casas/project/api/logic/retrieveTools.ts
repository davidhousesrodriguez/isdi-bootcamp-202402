//@ts-ignore
import { ObjectId, Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { User, Tool, ToolType } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveTools(userId: string): Promise<[{ image: string, category: string, description: string, address: string, location: number, available: Boolean, date: Date }] | { image: string, category: string, description: string, address: string, location: number, available: Boolean, date: Date }[] | any> {

    validate.text(userId, 'userId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Tool.find({}, '-__v').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(tools => {

                    tools.forEach(tool => {
                        tool.id = tool._id.toString()
                        delete tool._id
                    })
                    return tools

                })

        })
}

export default retrieveTools