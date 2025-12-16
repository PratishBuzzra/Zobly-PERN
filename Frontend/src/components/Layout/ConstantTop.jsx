import React from 'react'

const ConstantTop = ({cName, herodesc, title, text}) => {
  return (
    <div className={cName}>
        <div className={herodesc}>
            <h2 className='text-5xl text-white  font-bold pb-2'>{title}</h2>
            <p className='text-3xl text-white font-semibold pb-4'>{text}</p>
        </div>
      
    </div>
  )
}

export default ConstantTop
