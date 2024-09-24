import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DependenctSample2() {

    const [categories, setcategories] = useState([])
    const [suppliers, setsuppliers] = useState([])
    const [selectedCategoryId, setselectedCategoryId] = useState(1)
    const [categoryDetail, setcategoryDetail] = useState({})
    const [loading, setloading] = useState(true)

    console.log("Effect Dependency Sample 2 Rendered");


    useEffect(() => {

        if (selectedCategoryId == 0) return
        axios.get(`https://northwind.vercel.app/api/categories/${selectedCategoryId}`)
            .then(res => {
                setcategoryDetail(res.data)
            })

    }, [selectedCategoryId])

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data)
            })

        setTimeout(() => {
            axios.get("https://northwind.vercel.app/api/suppliers")
                .then(res => {
                    setsuppliers(res.data)
                    setloading(false)
                })
        }, 2000);


    }, [])




    return <>
        <h1>Effect Dependency Sample 2</h1>
        <select onChange={(e) => setselectedCategoryId(e.target.value)}>
            <option value="0">Select Category</option>
            {
                categories.map(item => {
                    return <option value={item.id}>{item.name}</option>
                })
            }
        </select>

        <h2>Category Detail</h2>
        <h3>Id: {categoryDetail.id}</h3>
        <h3>Name: {categoryDetail.name}</h3>
        <h3>Description: {categoryDetail.description}</h3>
        <hr />

       <ul>
              {
                loading ? <h1>Loading...</h1> : suppliers.map(item => {
                     return <li key={item.id}>{item.companyName}</li>
                })
              }
       </ul>

    </>
}

export default DependenctSample2