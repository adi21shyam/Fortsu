import "./index.css";
import Admin from "./containers/Admin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/Login";
import { toast, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
