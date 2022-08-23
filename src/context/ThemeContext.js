import {createContext, useState} from 'react';

//1. create context
export const ThemeContext = createContext()

//2. provider
function ThemeProvider( {children} ){
    const [theme, setTheme] = useState('dark')

    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    const contextValue = {
        theme,
        handleToggle
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;