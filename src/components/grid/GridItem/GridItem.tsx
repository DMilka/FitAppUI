import React from 'react';
import {Grid, GridProps} from "@mui/material";

interface GridItemInterface extends GridProps {
    children?: React.ReactNode;
}
const GridItem: React.FC<GridItemInterface> = (props) => {
    return (
        <Grid item {...props}>
            {props.children}
        </Grid>
    );
};

export default GridItem;
