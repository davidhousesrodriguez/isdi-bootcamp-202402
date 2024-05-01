import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { User, Tool } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('retrieveToolsByCategory', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves existing tools Keyhole Saw', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }))
            .then(user =>
                Tool.create({ owner: user.id, image: 'https://proferreteria.com/wp-content/uploads/08706-lijadora-orbital-koma-tools.jpg', category: '662cc0f896ea02f1d9f4ca89',description: 'Keyhole Saw to let', address: 'Carrer Torns', location: 123123, available: true, date: '2024-04-30T07:44:56.184Z' })

                .then(() =>
                    Tool.create({ owner: user.id, image: 'https://proferreteria.com/wp-content/uploads/08706-lijadora-orbital-koma-tools.jpg', category: '662cc0f896ea02f1d9f4ca91',description: 'Keyhole Saw to let 1', address: 'Carrer Torns', location: 123123, available: true, date: '2024-04-30T07:44:56.184Z' })
    
                        .then(() => logic.retrieveToolsByCategory(user.id, ''))
                        .then(tools => {
                            expect(tools.length).to.equal(1)
                            expect(tools[0].description).to.equal('Keyhole Saw to let')
                
                        })
                )

            )
            

    )


    // TODO test all methods

    after(() => mongoose.disconnect())
})