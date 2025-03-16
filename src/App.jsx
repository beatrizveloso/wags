import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="left">BVELOSO&CO</div>
        <div className="center">2025</div>
        <ul className="right">
          <li><a href="#home">HOME</a></li>
          <li><a href="#align-inf">HISTÓRIA</a></li>
          <li><a href="#faixa-cards">PAPÉIS</a></li>
          <span>|</span>
          <span>6</span>
        </ul>
        <div className="pink-line"></div>
      </header>

      <main id="home">
        <img src="/images/home.png" alt="Home" />
      </main>
 
    </>
  );
};

export default App;
