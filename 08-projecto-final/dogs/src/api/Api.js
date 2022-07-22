import React from 'react';
import UserPost from "./endpoint/UserPost";
import TokenPost from "./endpoint/TokenPost";
import PhotoPost from "./endpoint/PhotoPost";
import PhotoGet from "./endpoint/PhotoGet";

const Api = () => {
    return (
        <div>
            <h2>UserPost</h2>
            <UserPost/>
            <h2>Token Post</h2>
            <TokenPost/>
            <h2>Photo Post</h2>
            <PhotoPost/>
            <h2>Photo Get</h2>
            <PhotoGet/>
        </div>
    );
};

export default Api;
