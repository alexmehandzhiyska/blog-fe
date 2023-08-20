import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

function App(children) {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
