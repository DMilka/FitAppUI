import React from 'react';
import Container from "../../container/Container/Container";
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {NavigationMock} from "../../../mock/navigation/NavigationMock";
import Translation from "../../translate/Translation";
const DesktopNavigation = () => {
    return (
        <Container width={200} height={'100vh'}>
            <Drawer
                sx={{
                    width: 200,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 200,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {NavigationMock.map((navItem, index) => (
                        <ListItem key={navItem.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {<navItem.icon/>}
                                </ListItemIcon>
                                <ListItemText primary={<Translation trans={navItem.name} />} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Container>
    );
};

export default DesktopNavigation;
