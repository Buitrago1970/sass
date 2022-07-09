import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
