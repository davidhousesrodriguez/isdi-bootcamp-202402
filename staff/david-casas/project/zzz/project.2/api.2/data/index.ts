import mongoose, { ObjectId } from 'mongoose'

const { Schema , model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {
    name: string
    surname: string
    email : string
    password: string
    telephone: string
}

const user = new Schema({
    name: {
        type: String, 
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    telephone: {
        type: String
        
    }
})

type CategoryType = {
    name: string
    
}

const category = new Schema ({
    name: {
        type: String,
        required: true
    }
})

// type PointType = {

//     type: 'Point'
//     coordinates: [number, number]

// }

// const point = new Schema ({
//     type: {
//         type: String,
//         enum: ['Point'],
//         required: true
//     },
//     coordinates: {
//         type: [Number],
//         required: true
//     }
// })


type ToolType = {
    owner: string
    image: string
    category: string
    description: string
    address: string
    location: number
    available: boolean
}

const tool = new Schema({
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})
type LendingType = {
    tool: string
    lender: string
    borrower: string
    date: Date
    available: boolean
    
}

const lending = new Schema ({
    tool: {
        type: ObjectId,
        required: true
    },
    lender: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    borrower: {
        type: ObjectId,
        ref: 'User', 
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true

    }
})
type ReviewType = {
    author: String
    owner: String
    lending: String
    rate: Number
    comment: String
    date: Date
}

const review = ({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    lending: {
        type: ObjectId,
        ref: 'Lending',
        required: true
    },
    rate: {
        type: Number, 
        required: true
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    }

})
const User = model<UserType>('User', user)
const Category = model<CategoryType>('Category', category)
const Tool = model<ToolType>('Add', tool)
const Lending = model<LendingType>('Lending', lending)
const Review = model<ReviewType>('Review', review)

export {
    UserType,
    User,
    CategoryType,
    Category,
    ToolType,
    Tool,
    LendingType,
    Lending,
    ReviewType,
    Review
}