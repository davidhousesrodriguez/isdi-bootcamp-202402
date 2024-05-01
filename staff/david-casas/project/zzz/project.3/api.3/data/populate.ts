// @ts-nocheck
import mongoose from 'mongoose'

import { User, Category, Tool, Lending, Review } from '.'



mongoose.connect('mongodb://localhost:27017/project')
    .then(() => User.deleteMany())
        .then(() =>
            Promise.all([
            User.create({ name: 'Maria', surname: 'Revuelta Abin', email: 'maria@delao.com', password: '123qwe123', telephone: "666666666"}),
            User.create({ name: 'David', surname: 'Casas Rodriguez', email: 'davidhouses@hotmail.com', password: '71421576K', telephone: "677371770"}),
             
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
