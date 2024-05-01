import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'

import retrieveCategories from  './retrieveCategories.ts'

import retrieveTools from './retrieveTools.ts'
import retrieveToolsByCategory from './retrieveToolsByCategory.ts'

// import createTool from './createTool.ts'
// import retrieveTools from './retrieveTools.ts'
// import removeTool from '/removeTool.ts'
// import modifyTool from '/modifyTool.ts'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    retrieveCategories,

    retrieveTools,
    retrieveToolsByCategory


    // createTool,
    // retrieveTools
    // removeTool, 
    // modifyTool

}

export default logic