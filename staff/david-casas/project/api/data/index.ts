import mongoose, { ObjectId } from 'mongoose'

const { Schema , model } = mongoose

const { Types: { ObjectId } } = Schema


type PointType = {
    type: string, 
    coordinates: [number, number]
}

const point = new Schema ({
    type: {
        type: String,
        enum: ['Point'],
        required: true
        },
    

    coordinates: {
        type: [Number],
        required: true
}
})
type UserType = {
    name: string
    email : string
    username: string
    password: string
}

const user = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
})

type AddType = {
    author: ObjectId
    image: string
    text: string
    location: PointType
    date: Date
}

const add = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: point,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        required: true
    }
})

const User = model<UserType>('User', user)
const Add = model<AddType>('Add', add)
const Point = model<PointType>('Point', point)
export {
    UserType,
    User,
    AddType,
    Add

}