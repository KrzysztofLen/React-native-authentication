import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from './../../context/AuthContext';

export const ResolveAuthScreen = () => {
    const { tryLogin } = useContext(AuthContext);

    useEffect(() => {
        tryLogin();
    }, []);

    return null;
};

