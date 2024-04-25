import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import cleanUpLoggedInUserId from './cleanUpLoggedInUserId'

 import createAdd from './createAdd'
import retrieveAdds from './retrieveAdds'
// import removePost from './removePost'
// import modifyPost from './modifyPost'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,
    cleanUpLoggedInUserId,

    createAdd,
    retrieveAdds,
    // removePost,
    // modifyPost
}

export default logic