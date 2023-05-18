import React from 'react';
import Container from "../../components/container/Container/Container";
import {Outlet} from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <Container transparent>
            <Outlet/>
        </Container>
    );
};

export default HomePage;
