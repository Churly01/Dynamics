import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainView            from './MainView.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
	      Dinamics recursos humanos
      </h1>
      <Routes>
        <Route path="/" exact element={<MainView/>}/>
      </Routes>
    </>
  );
}

export default App;
