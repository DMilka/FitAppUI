import React, {useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {LocalStorageHelper} from "../../localStorage/LocalStorageHelper";

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
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeColorMode;
