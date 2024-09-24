import axios from 'axios'
import React, { useState } from 'react'

function AddCategory() {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")


    const add = () => {

        let newCategory = {
            name: name,
            description: description
        }

        axios.post("https://northwind.vercel.app/api/categories", newCategory)
            .then((response) => {
                alert("Category added")
            })

    }

    return <>
        <div>
            <label htmlFor="">Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description: </label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

    </>
}

export default AddCategory