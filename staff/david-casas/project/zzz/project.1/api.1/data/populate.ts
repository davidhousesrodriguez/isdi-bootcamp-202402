import mongoose from 'mongoose'

import { User, Add } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => User.deleteMany())
    .then(() => Add.deleteMany())
    .then(() => User.create({ name: 'David Casas', email: 'davidhouses@hotmail.com', username: 'davidhouses', password: '71421576K'}))
    .then(user1 => {
        let count = 1

        const add1 = { author: user1._id, image: 'https://media.istockphoto.com/id/1163368899/es/foto/conjunto-de-herramientas-el%C3%A9ctricas-de-carpinter%C3%ADa-de-mano-para-carpinter%C3%ADa-sobre-fondo-de.jpg?s=612x612&w=0&k=20&c=cCsXm4iXA1PWCo5ty0IRfRFctaAyV7RJAHYFbV3u-EI=', text: 'Range of tools to let', date: new Date }

        return Add.create(add1)
            .then(() => {
                count++

                const add2 = { author: user1._id,
                    image: 'https://proferreteria.com/wp-content/uploads/08706-lijadora-orbital-koma-tools.jpg', text: 'Orbital Sander to let', date: new Date }

                    return Add.create(add2)
                })
                .then(() => {
                    count++

                    const add3 = { author: user1._id, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMoR-OPooTtduYdKF3EGm-wjT__-NBxpycPHmFolE5maotdHjWbcpJ394a03CGeL_Hw-G3fgFeHto0fVtlF4PLxZZT_blo', text: '                    Keyhole Saw to let', date: new Date}

                    return Add.create(add3)
                })
        })
        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)