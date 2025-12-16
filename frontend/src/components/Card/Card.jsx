import React from 'react'

function Card({ group }) {
  return (
    <>
      <div className='bg-slate-900 text-white text-center font-bold w-[20rem] p-2 rounded'>{group.group_name}</div>
      <div className=' p-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mb-10 gap-2 place-items-center'>
        {
          group.models.map((model) => (
            <div key={model.id} className='w-full bg-gray-300 text-center p-2 text-gray-700 rounded-2xl'>
              {model.model_name}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Card