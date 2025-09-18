import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
          <h3 className='w-1/5 bg-red-600'>New Task</h3>
          <h5 className='w-1/5 bg-red-600'>Active Task</h5>
          <h5 className='w-1/5 bg-red-600'>Completed Task</h5>
          <h5 className='w-1/5 bg-red-600'>Failed Task</h5>
        </div>
      <div>
        {authData.employees.map((e, id) => {
        return (
        <div key={id} className='border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5'>{e.firstname}</h2>
          <h3 className='w-1/5 text-lg font-medium !text-blue-400'>{e.taskCount.newTask}</h3>
          <h5 className='w-1/5 text-lg font-medium !text-yellow-600'>{e.taskCount.active}</h5>
          <h5 className='w-1/5 text-lg font-medium'>{e.taskCount.completed}</h5>
          <h5 className='w-1/5 text-lg font-medium !text-red-600'>{e.taskCount.failed}</h5>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default AllTask
