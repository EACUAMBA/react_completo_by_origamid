import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {UserStorage} from "./UserContext";
import User from "./pages/User";
import ProtectedRoute from "./components/helper/ProtectedRoute";


function App() {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'login/*'} element={<Login/>}/>
                        <Route path={'conta/*'} element={<ProtectedRoute><User/></ProtectedRoute>}/>
                    </Routes>
                    <Footer/>
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
