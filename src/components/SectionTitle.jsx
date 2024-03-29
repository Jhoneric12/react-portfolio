import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className="title flex mb-32 w-full justify-center md:w-full lg:w-full">
        <h1 className='text-[2rem] text-fonts font-extrabold py-0.5 border-b-4 border-secondary'>{title}</h1>
    </div>
  )
}

export default SectionTitle