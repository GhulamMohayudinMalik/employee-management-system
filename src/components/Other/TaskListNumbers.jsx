import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className='flex mt-10 w-full justify-around gap-4'>
      <div className='w-[45%] px-10 py-6 bg-blue-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='w-[45%] px-10 py-6 bg-green-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='w-[45%] px-10 py-6 bg-yellow-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='w-[45%] px-10 py-6 bg-red-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
