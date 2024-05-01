import React, { useEffect, useState } from 'react'
import logic from '../logic'

function CategoryList ({}) {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveCategories()
                .then(setCategories)
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return <ul>{categories && categories.map(category => (
        <li key={category._id}>
        {category.name}
        </li>
        ))}</ul>
}

export default CategoryList