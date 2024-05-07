//@ts-nocheck
import * as mongoose from 'mongoose'
import { connect } from 'mongoose'
import mongoose from require('mongoose')

import { ObjectId } from 'mongoose'

import { validate, errors } from 'com'

import { User, Tool, Category } from '../data/index.ts'

const { NotFoundError, SystemError } = errors


function createTool(userId: string):  Promise<[{ image: string, category: string, description: string, address: String, location: number, available: Boolean, date: Date }] | { image: string, category: string, description: string, address: String, location: number, available: Boolean, date: Date }[] | any> {
    validate.text(userId, 'userId', true)
    validate.url(image, 'image')
    validate.text(category, 'category')
    validate.text(description, 'description')
    validate.text(address, 'address')
    validate.token(userId)

    return User.findById(userId)
        .then((user: any) => {
            if (!user) {
                throw new NotFoundError('user not found');
            }
            return Category.findById(category);
        })
        .then((category) => {
            if (!category) {
                throw new NotFoundError('category not found');
            }
            return Tool.create({
                owner: User._id,
                image: image,
                category: Category,
                description: description,
                address: address,
                location: location,
                available: available,
                date: new Date(date)
            })
        })
        .catch((error: { message: any }) => {
            throw new SystemError(error.message)

        })

}

export default createTool