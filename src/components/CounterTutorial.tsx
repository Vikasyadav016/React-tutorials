import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { decrement, increment, incrementByAmount } from '../slices/counterSlice'

function CounterTutorial() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)

  return (
    <div className="example-card">
      <h2>Counter Example</h2>
      <p>This example shows how to use Redux state with React components.</p>
      <div className="counter-display">
        <span>Count:</span>
        <strong>{count}</strong>
      </div>
      <div className="button-row">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="step-row">
        <label>
          Increment by:
          <input
            type="number"
            value={step}
            min={1}
            onChange={(event) => setStep(Number(event.target.value))}
          />
        </label>
        <button onClick={() => dispatch(incrementByAmount(step))}>Add Amount</button>
      </div>
      <div className="notes">
        <p>Redux Toolkit makes creating slices and reducers much easier.</p>
        <p>Use <code>useSelector</code> to read state and <code>useDispatch</code> to send actions.</p>
      </div>
    </div>
  )
}

export default CounterTutorial
