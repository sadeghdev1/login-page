import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div
        className="glow"
        style={{ left: pos.x + "px", top: pos.y + "px" }}
      ></div>
      <Login/>
    </div>
  );
}

export default App;

