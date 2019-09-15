import React, {useContext, useEffect} from 'react';
import {AuthContext} from './../../context';

const ResolveAuthScreen = () => {
    const {tryLogin} = useContext(AuthContext);

    useEffect(() => {
        tryLogin();
    }, []);

    return null;
};

export default ResolveAuthScreen;