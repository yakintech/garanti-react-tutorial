import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SupplierPage() {

    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {
        loadSuppliers()
    }, [])


    const loadSuppliers = () => {
        axios.get("https://northwind.vercel.app/api/suppliers")
            .then(res => {
                console.log("Response", res)
                setsuppliers(res.data)
            })

    }


    const deleteSupplier = (id) => {

        var confirmResult = window.confirm("Are you sure to delete this supplier?")

        if (confirmResult) {
            axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
                .then(res => {
                    loadSuppliers()
                })
        }

    }


    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
}

export default SupplierPage