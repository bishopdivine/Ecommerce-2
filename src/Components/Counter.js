import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='bg-gray-300 rounded-2xl px-2'>
      <button onClick={increment} className='bg-white m-1 rounded-full p-1'>+</button>
      {count}
      <button onClick={decrement} className='bg-white m-2 rounded-full p-1'>-</button>
    </div>
  );
};

export default Counter;