import React from 'react'
import { useRouteError } from 'react-router-dom'



const ErrorElement = () => {
    const error = useRouteError();
    
  return (
    <h1 className='font-bold text-4xl'>
      There was an Error...
    </h1>
  )
}

export default ErrorElement
