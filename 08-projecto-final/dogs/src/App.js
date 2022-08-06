import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {UserStorage} from "./UserContext";
import User from "./pages/User";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import Photo from "./pages/Photo";
import UserProfile from "./pages/UserProfile";
import NotFound404 from "./components/NotFound404";


function App() {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <div className={`app`}>
                        <Header/>
                        <main className={`appMain`}>
                            <Routes>
                                <Route path={'/'} element={<Home/>}/>
                                <Route path={'login/*'} element={<Login/>}/>
                                <Route path={'conta/*'} element={<ProtectedRoute><User/></ProtectedRoute>}/>
                                <Route path={'foto/:id'} element={<Photo/>}/>
                                <Route path={'perfil/:user'} element={<UserProfile/>}/>
                                <Route path={'*'} element={<NotFound404/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
