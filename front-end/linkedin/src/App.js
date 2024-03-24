import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pagess/AppLayout";
import Home from "./pagess/Home";
import Signup from "./pagess/Signup";
import Signin from "./pagess/Signin";
import Network from "./pagess/Network";
import Profile from "./pagess/Profile";
import Jobs from "./pagess/Jobs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/network" element={<Network />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobs" element={<Jobs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
