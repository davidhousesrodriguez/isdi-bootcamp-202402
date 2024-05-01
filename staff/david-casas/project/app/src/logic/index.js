import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import cleanUpLoggedInUserId from './cleanUpLoggedInUserId'

import retrieveCategories from './retrieveCategories'

import retrieveTools from './retrieveTools'
import retrieveToolsByCategory from './retrieveToolsByCategory'

// import createTool from './createTool'
// import removeTools from './removeTool'
// import modifyTool from './modifyTool'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,
    cleanUpLoggedInUserId,

    retrieveCategories,

    retrieveTools,
    retrieveToolsByCategory
    // createTool,
    // retrieveTools,
    // removeTool,
    // modifyTool
}

export default logic