import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
  useEffect(() => {
    tg.ready();
  }, [])

  const {onToggleButton, tg} = useTelegram();
  
  return (
    <div className="App">
      Work
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
