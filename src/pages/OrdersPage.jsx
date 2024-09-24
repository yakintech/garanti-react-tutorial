import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

function OrdersPage() {
    const [orders, setorders] = useState([])


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/orders")
            .then(res => res.json())
            .then(data => {
                setorders(data)
            })

    }, [])


    return <>
        <table className='w3-table'>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>Employee ID</th>
                    <th>Order Date</th>
                    <th>Required Date</th>
                    <th>Country</th>
                    <th>Details Length</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.customerId}</td>
                            <td>{item.employeeId}</td>
                            <td>{dayjs(item.orderDate).format('DD MMMM YYYY dddd HH:mm')}</td>
                            <td>{dayjs(item.requiredDate).format('DD MMMM YYYY dddd HH:mm')}</td>
                            <td>{item.shipAddress?.country}</td>
                            <td>{item.details?.length}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default OrdersPage

