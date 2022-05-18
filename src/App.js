import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Hostels from "./pages/Hostels";
import Profile from "./pages/Profile";
import Allocation from "./pages/Allocation";
import HostelScreen from "./pages/HostelScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
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
            <Route path="/hostel/:id" element={<HostelScreen />} />
          </Routes>
          <Routes>
            <Route path="/allocation" element={<Allocation />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
