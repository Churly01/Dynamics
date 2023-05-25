import {Route, Routes} from "react-router-dom";
import MainView            from './MainView.jsx';
import NavBar              from './NavBar.jsx';
import LocalDynamic    from './LocalDynamic.jsx';
import { useEffect, useState } from "react";
import {io} from "socket.io-client";

const SOCKETIO_URL = import.meta.env.SOCKET_IO_URL || "localhost:4001";
const socket = io(SOCKETIO_URL);

function App() {
  const [response, setResponse] = useState("");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("chat message", data => {
      setResponse(data);
    });
  }, []);

  return (
    <>
      <NavBar/>
      <div style={{fontSize: '3em', marginTop:'0.5em'}}>
        Survival on the Moon
      </div>
      <div style={{fontSize: '1.5em', marginTop:'0.5em'}}>
        {response}
      </div>

      <Routes>
        <Route path="/" exact element={<MainView/>}/>
        <Route path="/local_dynamic"  element={<LocalDynamic/>}/>
      </Routes>
    </>
  );
}

export default App;
