import { useState } from "react";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Emergency from "./pages/Emergency";
import Coping from "./pages/Coping";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      {page === "home" && <Home setPage={setPage} />}
      {page === "safety" && <Plan />}
      {page === "emergency" && <Emergency />}
      {page === "coping" && <Coping />}

      <div className="bottom-nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("safety")}>Safety</button>
        <button onClick={() => setPage("emergency")}>Emergency</button>
        <button onClick={() => setPage("coping")}>Coping</button>
      </div>
    </div>
  );
}