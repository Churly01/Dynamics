import {Route, Routes} from "react-router-dom";
import MainView            from './MainView.jsx';
import NavBar              from './NavBar.jsx';
import LocalDynamic    from './LocalDynamic.jsx';
function App() {
  return (
    <>
      <NavBar/>
      <div style={{fontSize: '3em', marginTop:'0.5em'}}>
        Survival on the Moon
      </div>
      <Routes>
        <Route path="/" exact element={<MainView/>}/>
        <Route path="/local_dynamic"  element={<LocalDynamic/>}/>
      </Routes>
    </>
  );
}

export default App;
