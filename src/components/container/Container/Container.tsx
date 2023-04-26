import React from 'react';
import {Box, useTheme} from "@mui/material";

interface ContainerInterface {
    children: React.ReactNode;
    width?: number
    height?: number
    transparent?: boolean
}
const Container: React.FC<ContainerInterface> = (props) => {
    const theme = useTheme();
    const {width, height, children, transparent} = props;

    let styles = {};

    styles = {
        ...styles,
        width: width ?? '100%'
    }

    styles = {
        ...styles,
        height: height ?? '100%'
    }


    let backgroundColor = null;
    if(!transparent) {
        if(theme.palette.mode === 'dark') {
            backgroundColor = theme.palette.grey["900"];
        }
        if(theme.palette.mode === 'light') {
            backgroundColor = theme.palette.grey["500"];
        }
    }

    if(backgroundColor) {
        styles = {
            ...styles,
            backgroundColor: backgroundColor
        }
    }

    return (
        <Box sx={styles}>
            {children}
        </Box>
    );
};

export default Container;
