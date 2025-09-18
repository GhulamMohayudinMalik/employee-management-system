 import React from 'react'
 
 function FailedTask({data}) {
   return (
     <div className="h-full shrink-0 w-[400px] bg-yellow-400 p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h2>
                    <h4 className="text-sm">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2">
                    {data.description}
                </p>
                <div className='mt-2'>
                    <button className='w-full bg-red-500 rounded-md'>Failed</button>
                </div>
            </div>
   )
 }
 
 export default FailedTask
 