import dotenv from 'dotenv'

import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { DuplicityError } = errors

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds a new user', () =>
        User.deleteMany()
            .then(() => logic.registerUser('Pepe Roni', 'peperoni', 'pepe@roni.com', '123qwe123', '677371770'))
            .then(() => User.findOne({ email: 'pepe@roni.com' }))
            .then(user => {
                expect(!!user).to.be.true

                expect(user.name).to.equal('Pepe Roni')
                expect(user.surname).to.equal('peperoni')
                expect(user.email).to.equal('pepe@roni.com')
                expect(user.password).to.equal('123qwe123')
                expect(user.telephone).to.equal('677371770')
                
                
            })
    )

    it('fails on existing users', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Pepe Roni', surname: 'Casas', email: 'pepe@roni.com', telephone:'677371770', password: '123qwe123' }))
            .then(() =>
                logic.registerUser('Pepe Roni', 'peperoni', 'pepe@roni.com', '123qwe123', '677371770')
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('user already exists')
                    })
            )
    )

    it('fails on non string name', () => {
        let errorThrown

        try {
            // @ts-ignore
            logic.registerUser(123, 'pepe@roni.com', 'peperoni', '123qwe123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(TypeError)
        expect(errorThrown.message).to.equal('name 123 is not a string')
    })

    it('fails on empty name', () => {
        let errorThrown

        try {
            logic.registerUser('', 'peperoni', 'pepe@roni.com', '123qwe123', '677371770')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('name >< is empty or blank')
    })

    // TODO add other unhappy test cases

    after(() => mongoose.disconnect())
})