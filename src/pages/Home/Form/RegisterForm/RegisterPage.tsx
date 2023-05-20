import React from 'react';
import {Form} from "react-router-dom";

import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    return (
    <Form method={'POST'}>
        <RegisterForm/>
    </Form>
    );
};

export default RegisterPage;
