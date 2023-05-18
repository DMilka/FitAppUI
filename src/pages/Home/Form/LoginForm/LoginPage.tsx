import React from 'react';
import {Form} from "react-router-dom";
import LoginForm from "./LoginForm";


const LoginPage = () => {
    return (
        <Form method={'POST'}>
           <LoginForm/>
        </Form>
    );
};

export default LoginPage;