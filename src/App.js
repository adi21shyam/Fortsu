import "./index.css";
import Admin from "./containers/Admin";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./components/Login";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path={`/`}>
            <LoginPage />
          </Route>
          <Route path={`/admin`}>
            <Admin />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
