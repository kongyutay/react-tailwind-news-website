import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./common/Header"

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
    
  );
}

export default App;
