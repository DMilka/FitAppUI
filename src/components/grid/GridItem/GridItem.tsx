import React from 'react';
import {Grid} from "@mui/material";

interface GridItemInterface {
    children: React.ReactNode;
}
const GridItem: React.FC<GridItemInterface> = (props) => {
    return (
        <Grid item>
            {props.children}
        </Grid>
    );
};

export default GridItem;
