import React from 'react';
import LoginForm from "./LoginForm";
import {render, screen} from "@testing-library/react";
describe('LoginForm', () => {
    it('should render email text field', function () {
        render(<LoginForm/>);

        const component = screen.getByLabelText('form:input.email');

        expect(component).toBeInTheDocument();
    });

    it('should render password text field', function () {
        render(<LoginForm/>);

        const component = screen.getByLabelText('form:input.password');

        expect(component).toBeInTheDocument();
    });

    it('should render login button', function () {
        render(<LoginForm/>);

        const component = screen.getByText('translation:button.login');

        expect(component).toBeInTheDocument();
    });


})