import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { CredentialsError, NotFoundError } = errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds on existing user and correct credentials', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'David', surname: 'Casas Rodriguez', email: 'davidhouses@hotmail.com', password: '71421576K', telephone: '677371770' }))
            .then(user =>
                logic.authenticateUser('davidhouses@hotmail.com', '71421576K')
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            )
    )

    it('fails on existing user and incorrect password', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'David', surname: 'Casas Rodriguez', email: 'davidhouses@hotmail.com', password: '71421576', telephone: '677371770' }))
            .then(() => logic.authenticateUser('davidhouses@hotmail.com', '71421576'))
            .catch(error => {
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal('wrong password')
            })
    )

    it('fails on existing user and incorrect username', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'David', surname: 'Flores', email: 'davidhouses@hotmail.com', password: '71421576K', telephone: '677371770' }))
            .then(() => logic.authenticateUser('davidhouseshotmail.com', '71421576K'))
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('password is not acceptable')
            })
    )

    // TODO add other unhappy test cases

    after(() => mongoose.disconnect())
})