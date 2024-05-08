//@ts-ignore
import { validate, errors } from 'com'

import { User, Tool, UserType, PointType } from '../data/index.ts'

import mongoose from 'mongoose'

const { Types: { ObjectId } } = mongoose

const { NotFoundError, SystemError } = errors


function createTool(userId: string, image: string, category: string, description: string, address: string, location: [number, number], available: string, date: string): Promise<void> {
    validate.text(userId, 'userId', true)
    validate.url(image, 'image')
    validate.text(category, 'category')
    validate.text(description, 'description')
    validate.text(address, 'address')
    //validate.coords(location, 'coords')
    //TODO validate available(boolean)
    //TODO validate date


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then((user: any) => {
            if (!user) {
                throw new NotFoundError('user not found');
            }

            const formattedPoint: PointType = {
                type: 'Point',
                coordinates: location
            }

            const newTool = {
                owner: user._id,
                image,
                category,
                description,
                address,
                location: formattedPoint,
                available: !!available,
                date: new Date(date)
            }

            return Tool.create(newTool)
                .catch((error: { message: any }) => {
                    debugger
                    throw new SystemError(error.message)
                })
                .then(tool => { })
        })

}

export default createTool