 import React from 'react';
// BrowserRouter - Ele envolve tudo que terá rotas nele, geralmente envolve todo o aplicativo.
// Routes - Envolve as rotas especificas.
// Route - é a rota em si
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import NotFoundPage from './NotFoundPage';
import Login from './Login';
 import Produto from "./Produto";
 import ProdutoDescricao from "./ProdutoDescricao";
 import ProdutoCustomizado from "./ProdutoCustomizado";
 import ProdutoAvaliacao from "./ProdutoAvaliacao";

const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'sobre'} element={<Sobre/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'produto/:id'} element={<Produto/>}>
                    <Route path={''} element={<ProdutoDescricao/>}/>
                    <Route path={'customizado'} element={<ProdutoCustomizado/>}/>
                    <Route path={'avaliacoes'} element={<ProdutoAvaliacao/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
