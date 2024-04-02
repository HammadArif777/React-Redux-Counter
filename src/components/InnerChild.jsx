import React from 'react'
import { useSelector } from 'react-redux'

function InnerChild() {
    const counter = useSelector(state => state.counter)
  return (
      <div
      className='shadow-xl w-1/4 text-center mt-2 bg-yellow-400 rounded shadow-yellow-500'
      >{counter}</div>
  )
}

export default InnerChild