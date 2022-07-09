import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Article from "./pages/Article"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/article" element={<Article />} />
          <Route element={<Home />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
