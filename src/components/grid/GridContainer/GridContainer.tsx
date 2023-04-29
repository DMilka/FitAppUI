import React from 'react';
import {Grid, GridProps} from "@mui/material";

interface GridContainerInterface  extends GridProps {
    children: React.ReactNode;
}
const GridContainer: React.FC<GridContainerInterface> = (props) => {
    return (
        <Grid container {...props}>
            {props.children}
        </Grid>
    );
};

export default GridContainer;
