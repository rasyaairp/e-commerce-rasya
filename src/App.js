// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add Another Page */}
        {/* <Route path="/" element={<Home />} />; */}
      </Routes>
    </Router>
  );
}

export default App;
