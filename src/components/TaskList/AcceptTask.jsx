import React from 'react'

function AcceptTask() {
    return (
        <div className="h-full shrink-0 w-[400px] bg-red-400 p-5 rounded-xl items-end">
            <div className="flex justify-between">
                <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt ullam expedita sapiente quas itaque.
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
