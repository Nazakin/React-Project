import React, { useContext } from 'react';
import { privateRoutes, publicRoutes } from '../router/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }
    
    return (
        <>
        <Routes>
            {isAuth ? (
                privateRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))
            ) : (
                publicRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))
            )}
            
        </Routes>
        {!localStorage.getItem('auth') && <Navigate to="/login" />}
        </>
    );
};

export default AppRouter;
