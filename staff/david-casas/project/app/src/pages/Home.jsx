import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
import { useContext } from '../context'
import { Link } from 'react-router-dom'

//import CategoryList from '../components/CategoryList'

import ToolList from '../components/ToolList'
import retrieveToolsByCategory from '../logic/retrieveToolsByCategory'
//import CreateTool from '../components/CreateTool'
// import EditTool from '../components/EditTool'

import { Routes, Route } from 'react-router-dom'
import Profile from '../components/Profile'


function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [tools, setTool] = useState(null)
    //const [categories, setCategories] = useState(null)

    const { showFeedback } = useContext()

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])

    // useEffect(() => {
    //     try {
    //         logic.retrieveCategories()
    //         .then(setCategories)
    //         .catch(error => showFeedback(error, 'error'))
    //     }catch (error) {
    //         showFeedback(error)
    //     }
    // }, [])

    useEffect(() => {
        try {
            logic.retrieveTools()
            .then(setTool)
            .catch(error => showFeedback(error, 'error'))
        }catch (error) {
            showFeedback(error)
        }
    }, [])
    //activar o desactivar hasta que no se activen los links
    // useEffect(() => {
        
    //     event.preventDefault()
    //     try {
    //         logic.retrieveToolsByCategory()
    //         .then(setTool)
    //         .catch(error => showFeedback(error, 'error'))
    //     }catch (error) {
    //         showFeedback(error)
    //     }
        
    // })

    const clearView = () => setView(null)

    const handleCreateToolCancelClick = () => clearView()

    const handleToolCreated = () => {
        clearView()
        setStamp(Date.now())
    }

    const handleCreateToolClick = () => setView('create-tool')

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    const handleEditToolCancelClick = () => clearView()

    const handleEditToolClick = tool => {
        setView('edit-tool')
        setPost(tool)
    }

    const handleToolEdited = () => {
        clearView()
        setStamp(Date.now())
        setTool(null)
    }

    logger.debug('Home -> render')

    return <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-sand'>
        <header className="px-[5vw] fixed top-0 bg-darksand w-full">
            {user && <h1>Hello, {user.name}!</h1>}

            <nav>
                <button className='border-2' onClick={handleLogoutClick}>🚪</button>
            </nav>

        </header>
        <div className='my-20'>
        <img className='w-[100px]' src="../../public/LOGO.png" alt="" /> 
        </div>
        
        <main className="px-[5vw]">
            <Routes>
                <Route path="/" element={<ToolList stamp={stamp} onEditToolClick={handleEditToolClick} />} />
                {/* <Route path="/" element={<CategoryList stamp={stamp} />} /> */}
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>

            {view === 'create-tool' && <CreateTool onCancelClick={handleCreateToolCancelClick} onToolCreated={handleToolCreated} />}

            {view === 'edit-tool' && <EditTool tool={tool} onCancelClick={handleEditToolCancelClick} onToolEdited={handleToolEdited} />}
        </main>

        <footer className="fixed bottom-0 w-full h-[50px] flex justify-center items-center p-[10px] box-border bg-white">
            <button onClick={handleCreateToolClick}>➕</button>
        </footer>
        </div>
    </>
}

export default Home