import React from 'react';

export const UserContext = React.useContext();

export const UserStorage = ({children}) => {
    return (
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
    );
};
