import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

function AdminDashboard({data}) {
    return (
        <div className='h-screen w-full p-10'>
            <Header data={data}/>
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
