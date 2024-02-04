import React from 'react'
import "./formInput.css";

const Image = (props) => {
  return (
    <figure className=''>
      <img src={props.logo} alt="logo image" className={props.className} />
    </figure>
  )
}

export default Image