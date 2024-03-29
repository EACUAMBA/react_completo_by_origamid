import React from 'react';
import {Route, Routes} from "react-router-dom";
import styles from './index.module.css';
import Feed from "../Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import UserHeader from "../../components/UserHeader";
import {UserContext} from "../../UserContext";
import NotFound404 from "../../components/NotFound404";

const User = props => {
    const {data} = React.useContext(UserContext);

    return (
        <section className={'container'}>
            <UserHeader/>
            <Routes>
                <Route path={'/'} element={<Feed user={data.id}/>}/>
                <Route path={'postar'} element={<UserPhotoPost/>}/>
                <Route path={'estatisticas'} element={<UserStats/>}/>
                <Route path={'*'} element={<NotFound404/>}/>
            </Routes>
        </section>
    );
};

export default User;
