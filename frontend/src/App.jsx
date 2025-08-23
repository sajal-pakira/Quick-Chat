import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="">
      <Navbar />

    <Routes>
      <Route element={<HomePage/>}/>
    </Routes>

    </div>
  );
};

export default App;
