import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Store/Actions/counterAction';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count)
    return (
        <>
            <div className='border rounded w-50 p-3 text-center bg-light'>
                <h2 className="mb-3 p-2 bg-dark rounded text-light">REDUX-COUNTER</h2>
                <button className="btn btn-primary" onClick={() => dispatch(increment(count + 10))}>Increment (+)</button>
                <span className='mx-3 p-2 bg-dark rounded-circle text-light'>{count}</span>
                <button className="btn btn-primary" onClick={() => dispatch(decrement(count - 10))}>Decrement (-)</button>
            </div>
        </>
    )
}

export default Counter;