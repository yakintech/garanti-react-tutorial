import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsPage() {

    const [products, setproducts] = useState([])
    const [originalProducts, setoriginalProducts] = useState([])
    const [minPrice, setminPrice] = useState(0)
    const [maxPrice, setmaxPrice] = useState(0)
    const [isSort, setisSort] = useState(false)

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/products")
            .then((response) => {
                setproducts(response.data)
                setoriginalProducts(response.data)
            })

    }, [])

    const searchProducts = (data) => {
        var filteredProducts = originalProducts.filter(item => item.name.toLowerCase().includes(data.toLowerCase()))
        setproducts(filteredProducts)
    }

    const searchByPrice = () => {
        if (minPrice != 0 && maxPrice != 0) {
            var filteredProducts = originalProducts.filter(item => item.unitPrice >= Number(minPrice) && item.unitPrice <= Number(maxPrice))
            setproducts(filteredProducts)
        }
        else{
            setproducts(originalProducts)
        }
    }

    const sortByPrice = () => {
         if(isSort){
            var sortedProducts = products.sort((a, b) => a.unitPrice - b.unitPrice)
            setproducts([...sortedProducts])
         }
         else{
            var sortedProducts = products.sort((a, b) => b.unitPrice - a.unitPrice)
            setproducts([...sortedProducts])
         }

         setisSort(!isSort)
    }


    return <>
        <hr />
        <label htmlFor="">Search: </label>
        <input type='text' onChange={(e) => searchProducts(e.target.value)} />
        <hr />
        <h2>Products Length: {products.length}</h2>
        <hr />
        <div style={{ display: 'flex', gap: 40 }}>
            <div>
                <label htmlFor="">Min Price: </label>
                <input type='number' onChange={(e) => setminPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Max Price: </label>
                <input type='number' onChange={(e) => setmaxPrice(e.target.value)} />
            </div>
            <div>
                <button onClick={searchByPrice}>Search</button>
            </div>
        </div>

        <hr />
        <table className='w3-table w3-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{cursor:'pointer'}} onClick={sortByPrice}>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice?.toFixed(2)}</td>
                            <td>{item.unitsInStock}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default ProductsPage