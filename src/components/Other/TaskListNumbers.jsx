import React from 'react'

function TaskListNumbers() {
  return (
    <div className='flex mt-10 w-full justify-around gap-4'>
      <div className='w-[45%] px-10 py-6 bg-blue-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] px-10 py-6 bg-green-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] px-10 py-6 bg-yellow-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] px-10 py-6 bg-red-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
