import React from 'react'

const {useState} = React;

export default function Counter() {
    const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1>Counter</h1>
        <p>
            {counter}
        </p>
        <button onClick={() => {
            setCounter(counter + 1);
            }}>Increase Counter
        </button>
    </div>
  )
}
