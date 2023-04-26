import React from 'react';
import {Grid} from "@mui/material";

interface GridContainerInterface {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
const GridContainer: React.FC<GridContainerInterface> = (props) => {
    const {direction} = props;
    return (
        <Grid container direction={direction ?? 'row'}>
            {props.children}
        </Grid>
    );
};

export default GridContainer;
