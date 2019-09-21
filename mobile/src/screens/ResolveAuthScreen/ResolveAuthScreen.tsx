import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from './../../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLogin } = useContext(AuthContext);

    useEffect(() => {
        tryLogin();
    }, []);

    return null;
};

export default ResolveAuthScreen;
