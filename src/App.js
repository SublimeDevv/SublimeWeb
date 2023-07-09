import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Document from "./pages/MyConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/MyConfig" element={<Document/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
