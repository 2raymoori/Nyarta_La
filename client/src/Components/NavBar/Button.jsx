import React from 'react'

const Button = ({title,pointer}) => {
  return (
    <div>
       <div>
          <a href={`${pointer}`}>{`${title}`}</a>
        </div>
    </div>
  )
}

export default Button
