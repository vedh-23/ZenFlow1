import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;