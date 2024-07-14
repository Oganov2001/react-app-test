import { useState } from 'react';
import './App.css';

function App() {
  const [ num, setNum ] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div className="App">
      <p>{num}</p>
      
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
