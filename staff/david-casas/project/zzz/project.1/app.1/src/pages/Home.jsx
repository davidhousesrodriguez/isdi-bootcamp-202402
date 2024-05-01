import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
import { useContext } from '../context'

import CategoryList from '../components/CategoryList'

//import AddList from '../components/AddList'
//import CreateAdd from '../components/CreateAdd'
// import EditPost from '../components/EditPost'

import { Routes, Route } from 'react-router-dom'
import Profile from '../components/Profile'


function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [add, setAdd] = useState(null)
    const [categories, setCategories] = useState(null)

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

    useEffect(() => {
        try {
            logic.retrieveCategories()
            .then(setCategories)
            .catch(error => showFeedback(error, 'error'))
        }catch (error) {
            showFeedback(error)
        }
    }, [])

    const clearView = () => setView(null)

    const handleCreateAddCancelClick = () => clearView()

    const handleAddCreated = () => {
        clearView()
        setStamp(Date.now())
    }

    const handleCreateAddClick = () => setView('create-add')

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    const handleEditAddCancelClick = () => clearView()

    const handleEditAddClick = add => {
        setView('edit-add')
        setPost(add)
    }

    const handleAddEdited = () => {
        clearView()
        setStamp(Date.now())
        setAdd(null)
    }

    logger.debug('Home -> render')

    return <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-orange-100'>
        <header className="px-[5vw] fixed top-0 bg-white w-full">
            {user && <h1>Hello, {user.name}!</h1>}

            <nav>
                <button onClick={handleLogoutClick}>🚪</button>
            </nav>
        </header>
        <div className='my-10'>
        <img className='w-[100px]' src="../../public/LOGO.png" alt="" /> 
        </div>
        
        <main className="my-[50px] px-[5vw]">
            <Routes>
                {/* <Route path="/" element={<AddList stamp={stamp} onEditAddClick={handleEditAddClick} />} /> */}
                <Route path="/" element={<CategoryList stamp={stamp} />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>

            {view === 'create-add' && <CreateAdd onCancelClick={handleCreateAddCancelClick} onAddCreated={handleAddCreated} />}

            {view === 'edit-add' && <EditAdd add={add} onCancelClick={handleEditAddCancelClick} onAddEdited={handleAddEdited} />}
        </main>

        <footer className="fixed bottom-0 w-full h-[50px] flex justify-center items-center p-[10px] box-border bg-white">
            <button onClick={handleCreateAddClick}>➕</button>
        </footer>
        </div>
    </>
}

export default Home