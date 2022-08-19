import {useState} from 'react';

export function Counter() {
  const [counter, setCounter] = useState(1);
  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // }

  return (
    <div className="Counter" style = {{padding: '100px'}}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export function RandomGift(){
  const gifts =  [
    '5$',
    '100$',
    'Keyboard'
  ]
  const [gift, setGift] = useState()
  function handleGift() {
    const index = Math.floor(Math.random() * gifts.length);
    return setGift(gifts[index]);
  }

  return (
    <div className="RandomGift">
      <h2>{gift || 'Chưa có phần thưởng'}</h2>
      <button onClick={handleGift}>Lấy thưởng</button>
    </div>
  )
}
