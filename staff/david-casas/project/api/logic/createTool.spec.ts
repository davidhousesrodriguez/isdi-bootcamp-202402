import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors} from 'com'
import chaiAsPromised from 'chai-as-promised'

dotenv.config()

use(chaiAsPromised)

const { Types: { ObjectId} } = mongoose

import { User, Tool } from '../data/index.ts'
import createTool from './createTool.ts'

const { NotFoundError } = errors

describe('CreatePost', () => {
    before(()=> mongoose.connect(process.env.MONGO_TEST_URL))

    it('creates tool with all the the fields completed', () => 
        User.deleteMany()
            .then(() => 
                Tool.deleteMany()
                    .then(() => 
                        User.create({ name: 'David', surname: 'Casas Rodriguez', email: 'davidhouses@hotmail.com', password: '71421576K', telephone: '677371770' })
                            .then(user => logic.createTool(user.id, 'https://www.shutterstock.com/image-photo/cordless-drill-screwdriver-bit-on-600nw-1048446001.jpg', '6635221cfae6955354e9dd6a', 'Wireless drill best brand ever', 'Carrer Aprestadora', 123321 , true, '06-05-24'))
                    )
            )
    )

})