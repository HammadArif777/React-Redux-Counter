import React from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import { useSelector } from 'react-redux';
import { useRef } from 'react';
function App() {
  const title = document.getElementsByTagName('title')[0]
  const counter = useSelector((state) => state.counter);
  title.innerText = counter
  return <>
    <div className='mx-auto mt-5 w-1/2 bg-white shadow-lg rounded p-5'>
      <h1 className='text-neutral-600 text-2xl font-bold'>
        Counter: { counter}
      </h1>

  <Increment/>
  <Decrement/>
  </div>
  
  </>
}

export default App