import React from 'react'
import './Avatar.css'

export const Avatar = (props) => {
  return (
    <div className='AvatarImg'>
        <img src={props.avatar} alt="not display"></img>
    </div>
  )
}
