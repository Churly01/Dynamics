import { Link } from "react-router-dom";
import socket from "./socket";
import { useEffect, useState } from "react";

const  MainView = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("chat message", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });

    return () => {
      socket.off("chat message");
      socket.off("connect");
    };
  }, []);
  return (
    <>
      <div style={{fontSize: '2em', textAlign:'justify', margin:'0.5em'}}>
        You are a member of a space crew originally scheduled to rendezvous with a mother ship on the lighted surface of the moon. However, due to mechanical difficulties, your ship was forced to land at a spot some 200 miles from the rendezvous point. During reentry and landing, much of the equipment aboard was damaged and, since survival depends on reaching the mother ship, the most critical items available must be chosen for the 200-mile trip. Below are listed the 15 items left intact and undamaged after landing. Your task is to rank order them in terms of their importance for your crew in allowing them to reach the rendezvous point. Place the number 1 by the most important item, the number 2 by the second most important, and so on through number 15 for the least important.
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
      </input>
      <button
        onClick={() => {
          socket.emit("chat message", value);
        }}
      >
        Send Message
      </button>
      <button>
        <Link to="/local_dynamic">Start Dynamic</Link>
      </button>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </>
  );
};

export default MainView;
