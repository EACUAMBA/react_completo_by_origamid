import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <>
            {/*<Header/>*/}
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={''} element={<Produtos/>}/>
                    <Route path={'produtos/:id'} element={<Produto/>}/>
                    <Route path={'contacto'} element={<Contacto/>}/>
                </Route>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
