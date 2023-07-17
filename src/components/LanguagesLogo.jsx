import React from 'react'

const LanguagesLogo = ({logo}) => {
  return (
    <div className="lang-logo">
        <div className="container-lang w-[4.438rem] h-[4.438rem] bg-[#5C6D7E] rounded flex items-center justify-center mr-5">
            {logo}
        </div>
    </div>
  )
}

export default LanguagesLogo