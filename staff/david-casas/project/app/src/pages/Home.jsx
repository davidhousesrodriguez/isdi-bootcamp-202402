import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useContext } from '../context'
import CategoryList from '../components/CategoryList'
import ToolList from '../components/ToolList'
import CreateTool from '../components/CreateTool'
import EditTool from '../components/EditTool'
import Profile from '../components/Profile'
import retrieveToolsByCategory from '../logic/retrieveToolsByCategory'
import logic from '../logic'

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [tools, setTools] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState('')
    const [tool, setTool] = useState(null)

    const navigate = useNavigate() 
    const { showFeedback } = useContext()

    useEffect(() => {
        logic.retrieveUser()
            .then(setUser)
            .catch((error) => showFeedback(error, 'error'))
    }, [])

    useEffect(() => {
        logic.retrieveCategories()
            .then(setCategories)
            .catch((error) => showFeedback(error, 'error'))
    }, [])

   
    const handleCreateToolClick = () => {
        setView('create-tool')
    }

    const handleToolCreated = () => {
        setView(null)
        setStamp(Date.now()) 
    }

    const handleEditToolClick = (tool) => {
        setView('edit-tool')
        setTool(tool) 
    }

    const handleToolEdited = () => {
        setView(null)
        setStamp(Date.now())
    }

    const handleLogoutClick = () => {
        sessionStorage.removeItem('token')
        onUserLoggedOut()
        navigate('/login') 
    }
    
    const handleSelectCategory = (e) =>
        setSelectedCategoryId(e.target.value)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFBB70]">
            <header className="flex flex-row px-[5vw] fixed top-0 bg-[#ED9455] w-full">
                {user && <h1>Hello, {user.name}!</h1>}
                <div className="w-8 h-8">
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </header>
            <div className="my-20">
                <img className="w-[100px]" src="../../public/LOGO.png" alt="Logo" />
            </div>
            
            <div>
                <label htmlFor="category"></label>
                <select
                    id="category"
                    onChange={handleSelectCategory}
                >
                    <option value="">-- Select a category --</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                            
                        </option>
                    ))}
                </select>
            </div>
            
            <ToolList tools={tools} onEditToolClick={handleEditToolClick} categoryId={selectedCategoryId} />

            <main className="px-[5vw]">
                <Routes>
                    
                    <Route path="/profile/:username" element={<Profile />} />
                </Routes>
                {view === 'create-tool' && <CreateTool onCancelClick={() => setView(null)} onToolCreated={handleToolCreated} />}
                {view === 'edit-tool' && <EditTool tool={tool} onCancelClick={() => setView(null)} onToolEdited={handleToolEdited} />}
            </main>

            <footer className="fixed bottom-0 w-full h-[50px] flex justificar-center items-center p-[10px] box-border bg-white">
                <button onClick={handleCreateToolClick}>➕</button>
            </footer>
        </div>
    )
}

export default Home
