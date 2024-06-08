import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {
    const [active, setActive] = useState('Dashboard');

    const handleClick = (name) => {
        setActive(name);
    };

    return (
        <ActiveContext.Provider value={{ active, handleClick }}>
            {children}
        </ActiveContext.Provider>
    );
};

export { ActiveProvider, ActiveContext };
