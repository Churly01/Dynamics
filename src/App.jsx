import { Route, Routes } from "react-router-dom";
import MainView from './MainView.jsx';
import NavBar from './NavBar.jsx';
import LocalDynamic from './LocalDynamic/LocalDynamic.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';

function App() {
  document.title = "Survival on the Moon";
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<MainView />} />
        <Route path="/local_dynamic" element={<LocalDynamic />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
