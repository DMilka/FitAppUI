import React from 'react';
import Container from "../../components/container/Container/Container";
import {Outlet} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import DesktopNavigation from "../../components/navigations/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../components/navigations/MobileNavigation/MobileNavigation";
import GridContainer from "../../components/grid/GridContainer/GridContainer";
import GridItem from "../../components/grid/GridItem/GridItem";

const Dashboard = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if(isDesktop) {
        return (
            <Container height={'100vh'}>
                <GridContainer>
                    <GridItem>
                        <DesktopNavigation/>
                    </GridItem>
                    <GridItem>
                        <Outlet/>
                    </GridItem>
                </GridContainer>
            </Container>
        );
    } else {
        return (
            <Container height={'100vh'}>
                <GridContainer>
                    <GridItem>
                        <Outlet/>
                    </GridItem>
                </GridContainer>
                <MobileNavigation/>
            </Container>
        );
    }

};

export default Dashboard;
