import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Container from "../../container/Container/Container";
const MobileNavigation = () => {
    const [activeCard, setActiveCard] = useState<number>(0);
    return (
        <Container>
            <div style={{position: 'fixed', bottom: 0, right: 0, left: 0}}>
                <BottomNavigation
                    showLabels
                    value={activeCard}
                    onChange={(event, newValue) => {
                        setActiveCard(newValue);
                    }}
                >
                    <BottomNavigationAction label="Diet" icon={<AccessibilityNewIcon />} />
                    <BottomNavigationAction label="Training" icon={<AccessibilityNewIcon />} />
                    <BottomNavigationAction label="Profile" icon={<AccessibilityNewIcon />} />
                </BottomNavigation>
            </div>
        </Container>
    );
};

export default MobileNavigation;
