import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import Container from "../../container/Container/Container";
import {NavigationMock} from "../../../mock/navigation/NavigationMock";
import Translation from "../../translate/Translation";
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
                    {NavigationMock.map(navItem => <BottomNavigationAction key={navItem.name} label={<Translation trans={navItem.name} />} icon={<navItem.icon />} /> )}
                </BottomNavigation>
            </div>
        </Container>
    );
};

export default MobileNavigation;
