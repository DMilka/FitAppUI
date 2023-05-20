import React from 'react';
import Container from "../../container/Container/Container";
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
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
                    {['Profile', 'Diet', 'Training'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {<AccessibilityNewIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Container>
    );
};

export default DesktopNavigation;
