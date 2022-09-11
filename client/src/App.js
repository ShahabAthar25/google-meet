import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WaitingRoom from "./pages/WaitingRoom";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitingroom" element={<WaitingRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
