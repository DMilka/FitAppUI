import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import Container from "../../container/Container/Container";
import {navigationMock} from "../../../mock/navigation/NavigationMock";
import Translation from "../../translate/Translation";
import {useNavigate} from "react-router-dom";
const MobileNavigation = () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const navigate = useNavigate();

    return (
        <Container>
            <div style={{position: 'fixed', bottom: 0, right: 0, left: 0}}>
                <BottomNavigation
                    showLabels
                    value={activeCard}
                    onChange={(event, newValue) => {
                        setActiveCard(newValue);
                        navigate(newValue);
                    }}
                >
                    {navigationMock.map(navItem =>
                            <BottomNavigationAction value={navItem.path} key={navItem.name} label={<Translation trans={navItem.name}/>} icon={navItem.icon} />
                    )}
                </BottomNavigation>
            </div>
        </Container>
    );
};

export default MobileNavigation;
