import Navbar from "./components/Navbar";

// import { AuthContextProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <AuthContextProvider> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </AuthContextProvider> */}
    </>
  );
}

export default App;
