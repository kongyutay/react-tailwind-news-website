import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./common/Header";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/singleProduct" element={<SinglePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
