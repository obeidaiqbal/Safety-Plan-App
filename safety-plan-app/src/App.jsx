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
        <button onClick={() => setPage("home")} style={page === "home" ? styles.active : {}}>Home</button>
        <button onClick={() => setPage("safety")} style={page === "safety" ? styles.active : {}}>Safety</button>
        <button onClick={() => setPage("emergency")} style={page === "emergency" ? styles.active : {}}>Emergency</button>
        <button onClick={() => setPage("coping")} style={page === "coping" ? styles.active : {}}>Coping</button>
      </div>
    </div>
  );
}

const styles = {
  active: {
    backgroundColor: "#ddd",
  },
};