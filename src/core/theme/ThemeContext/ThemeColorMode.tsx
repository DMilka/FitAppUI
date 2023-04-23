import React, {useEffect, useState} from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {LocalStorageHelper} from "../../localStorage/LocalStorageHelper";
import { GlobalStyles } from '@mui/material';

interface ColorModeContextProps {
    children: React.ReactNode;
}

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';

export const USER_COLOR_MODE = 'userColorMode'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const ThemeColorMode: React.FC<ColorModeContextProps> = (props) => {
    const userSavedColorMode = LocalStorageHelper.getItem(USER_COLOR_MODE);
    let userColorMode: 'light' | 'dark' = LIGHT_MODE;
    if(userSavedColorMode && (userSavedColorMode === DARK_MODE || userSavedColorMode === LIGHT_MODE)) {
        userColorMode = userSavedColorMode;
    } else {
        LocalStorageHelper.addItem(USER_COLOR_MODE, LIGHT_MODE);
    }
    const [mode, setMode] = useState<'light' | 'dark'>(userColorMode);
    const [globalStyleComponent, setGlobalStyleComponent] = useState<React.ReactElement | null>(null);
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE));
            },
        }),
        [],
    );

    const theme = createTheme({
        palette: {
            mode,
    }});

    useEffect(() => {
        if(mode === DARK_MODE) {
            setGlobalStyleComponent(<GlobalStyles
                styles={{
                    body: {
                        backgroundColor: 'background.default',
                        color: 'text.primary',
                    },
                }}
            />)
        } else {
            setGlobalStyleComponent(null);
        }
    }, [mode]);



    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {globalStyleComponent}
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeColorMode;
