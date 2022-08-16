import {useState} from 'react';

function Counter() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="Counter" style = {{padding: '100px'}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default Counter;
