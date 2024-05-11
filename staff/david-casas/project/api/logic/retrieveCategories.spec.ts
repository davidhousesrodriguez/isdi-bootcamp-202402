// import dotenv from 'dotenv'

// import mongoose from 'mongoose'
// import { User, Category } from '../data/index.ts'

// import logic from './index.ts'
// import { expect } from 'chai'
// import { errors } from 'com'

// dotenv.config()

// const { Types: { ObjectId } } = mongoose
// const { NotFoundError } = errors

// describe('retrieveCategories', () => {
//     before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

//     it('retrieves an existing category', () =>
//         User.deleteMany()
//             .then(() => User.create({ name: 'David', surname: 'Casas Rodriguez', email: 'davidhouses@hotmail.com', password: '71421576K', telephone: '677371770' }))
//             .then((category: { name: any }) => 
//                 Category.findById({ name: 'Keyhole Saw'})
//                     .then(() => logic.retrieveCategories(''))
//                     .then(category => {
//                         expect(category.name).to.equal('Keyhole Saw')
//                     })
//             )
//         )
//     })
