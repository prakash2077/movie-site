import React from 'react'

const MyButton = ({linkText, buttonText}) => {
  return (
    <a className='w-30 mr-10 mb-10' href={linkText}>{buttonText}</a>
  )
}

export default MyButton
