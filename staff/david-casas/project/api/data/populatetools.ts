import mongoose from 'mongoose'

import { User, Tool, Category } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Tool.deleteMany())
        .then(() =>
            Promise.all([
                Tool.create({ owner: '662f59f9581f46ce69c25421', image: 'https://media.istockphoto.com/id/1163368899/es/foto/conjunto-de-herramientas-el%C3%A9ctricas-de-carpinter%C3%ADa-de-mano-para-carpinter%C3%ADa-sobre-fondo-de.jpg?s=612x612&w=0&k=20&c=cCsXm4iXA1PWCo5ty0IRfRFctaAyV7RJAHYFbV3u-EI=', category: '6639d51a8657766f66560260', description: 'Range of tools to let', address: 'Carrer Nou', location: '123123', available: false,  date: new Date }),
        
                Tool.create({ owner: '662f59f9581f46ce69c25421',
                            image: 'https://proferreteria.com/wp-content/uploads/08706-lijadora-orbital-koma-tools.jpg',category: '6639d51a8657766f66560257', description: 'Orbital Sander to let',address: 'Port Vell', location: '123123', available: true, date: new Date }),

                Tool.create({ owner: '662f59f9581f46ce69c25421', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMoR-OPooTtduYdKF3EGm-wjT__-NBxpycPHmFolE5maotdHjWbcpJ394a03CGeL_Hw-G3fgFeHto0fVtlF4PLxZZT_blo',category:'6639d51a8657766f66560256', description: 'Keyhole Saw to let',address: 'Carrer Torns', location: '123123', available: true, date: new Date}),

                Tool.create({ owner: '662f7bd72695c495092270ef', image: 'https://m.media-amazon.com/images/I/61PX1kRPsmL._AC_SX679_.jpg',category:'6639d51a8657766f6656025e', description: 'Blower',address: 'Carrer Torns', location: '123123', available: false, date: new Date})
            ])
        )
        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
        