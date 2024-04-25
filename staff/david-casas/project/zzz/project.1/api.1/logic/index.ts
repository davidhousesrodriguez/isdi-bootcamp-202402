import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'

import createAdd from './createAdd.ts'
import retrieveAdds from './retrieveAdds.ts'
// import removeAdd from '/removeAdd.ts'
// import modifyAdd from '/modifyAdd.ts'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createAdd,
    retrieveAdds
    // removePost, 
    // modifyPost

}

export default logic