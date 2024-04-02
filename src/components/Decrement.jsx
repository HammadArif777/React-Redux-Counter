import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementCreator } from '../store/actions';
import InnerChild from './InnerChild';
function Decrement() {
  const dispatch = useDispatch()
    return (
        <>
          <div className="mt-5 mx-auto p-5 bg-yellow-500 rounded shadow-lg text-white text-xl font-semibold">
          <button
            onClick={() => dispatch(decrementCreator() )}
            className="bg-red-500 p-2 rounded">
                      Decrement
            </button>
            <InnerChild/>
          </div>
          
        </>
      );
}

export default Decrement