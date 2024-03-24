import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Authentication from "./pages/Authentication";
import Signup from "./pages/Signup/components/Signup";
import Signin from "./pages/Signin/components/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/auth" />
          <Route path="/auth" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
