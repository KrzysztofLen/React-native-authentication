import React, { useReducer } from 'react';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export default (reducer, actions, initialValue: {}) => {
    const Context: any = React.createContext({});

    const Provider = (props: Props) => {
        const [state, dispatch] = useReducer(reducer, initialValue);

        //const logoutAction = { logout: actions.logout(dispatch) };
        const boundActions: { [key: string]: () => void } = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider
                value={{
                    state,
                    ...boundActions,
                }}>
                {props.children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};
