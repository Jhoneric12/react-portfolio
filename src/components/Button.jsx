import React from 'react'

const Button = ( {btnText} ) => {
  return (
    <div className="btn">
        <button className="btn-project text-fonts text-based font-semibold rounded-lg border-solid border bg-primary border-secondary py-4 px-12 outline-2 hover:bg-secondary hover:ease-in transition duration-150">{btnText}</button>
    </div>
  )
}

export default Button