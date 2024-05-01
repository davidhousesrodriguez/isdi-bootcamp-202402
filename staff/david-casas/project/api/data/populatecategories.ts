import mongoose from 'mongoose'

import { User, Category, Tool, Lending, Review } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => User.deleteMany())
    .then(() => Category.deleteMany())
    .then(() => User.create({ name: 'David', surname: 'Casas Rodriguez', email: 'davidhouses@hotmail.com', password: '71421576K', telephone: '677371770'}))
        .then(() =>
            Promise.all([
            Category.create({ name: 'Keyhole Saw' }),
            Category.create({ name: 'Orbital Sander' }),
            Category.create({ name: 'Drill' }),
            Category.create({ name: 'Belt Sander' }),
            Category.create({ name: 'Chainsaw' }),
            Category.create({ name: 'Saber Saw' }),
            Category.create({ name: 'Electric Screwdriver' }),
            Category.create({ name: 'Electric Brush' }),
            Category.create({ name: 'Blower' }),
            Category.create({ name: 'Welder' }),
            Category.create({ name: 'Other' })
        ])

    )

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
