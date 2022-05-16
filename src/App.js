import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Hostels from "./pages/Hostels";
import Profile from "./pages/Profile";
import Allocation from "./pages/Allocation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<SignIn />} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Routes>
            <Route path="/hostels" element={<Hostels />} />
          </Routes>
          <Routes>
            <Route path="/allocation" element={<Allocation />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
