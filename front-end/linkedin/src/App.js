import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pagess/AppLayout";
import Home from "./pagess/Home";
import Signup from "./pagess/Signup";
import Signin from "./pagess/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
