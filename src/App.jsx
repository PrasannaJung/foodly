import { Route, Routes } from "react-router-dom";
import AllItems from "./components/AllItems";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<AllItems />} />
      </Routes>
    </>
  );
}

export default App;
