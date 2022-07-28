import React from 'react';
import {TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET} from "./api";
import {useNavigate} from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [loading, setLoading] = React.useState(null);
    const [error, setError] = React.useState(null);

    const navigate = useNavigate();

    const userLogout = React.useCallback(function userLogout() {
        window.localStorage.removeItem('token')
        setData(null);
        setLoading(false);
        setLogin(false);
        setError(null);
        navigate('/login')
    }, [navigate])


    const getUser = React.useCallback(
        async function getUser(token) {
            const {url, options} = USER_GET(token);
            const response = await fetch(url, options);
            const json = await response.json();

            setData(json);
            setLogin(true)
        }, []
    )

    async function userLogin(username, password) {
        try {
            setError(null)
            setLoading(true);
            const {url, options} = TOKEN_POST({username, password})
            const tokenRes = await fetch(url, options);
            if (!tokenRes.ok) {
                throw new Error(`Error: Utilizador inválido!`)
            }
            const {token} = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token)
            navigate('/conta')
        } catch (error) {
            setError(error.message)
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null)
                    setLoading(true)
                    const {url, options} = TOKEN_VALIDATE_POST(token)
                    const response = await fetch(url, options);
                    //const json = await response.json();

                    if (!response.ok) {
                        throw new Error('Token inválido!')
                    }
                    await getUser(token)
                } catch (error) {
                    await userLogout()
                } finally {
                    setLoading(false)
                }
            } else {
                setLogin(false)
            }
        }

        autoLogin().then(r => r);
    }, [userLogout, getUser])

    return (
        <UserContext.Provider value={{userLogin, getUser, data, userLogout, loading, error, login}}>
            {children}
        </UserContext.Provider>
    );
};
