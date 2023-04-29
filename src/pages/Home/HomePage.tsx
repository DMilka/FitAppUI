import React from 'react';
import Container from "../../components/container/Container/Container";
import LoginForm from "./Form/LoginForm";

const HomePage: React.FC = () => {
    return (
        <Container transparent>
            <LoginForm/>
        </Container>
    );
};

export default HomePage;
