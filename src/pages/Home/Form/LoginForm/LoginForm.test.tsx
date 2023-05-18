import React from 'react';
import LoginForm from "./LoginForm";
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

describe('LoginForm', () => {
    it('should render email text field', function () {
        render(<MemoryRouter><LoginForm/></MemoryRouter>);

        const component = screen.getByLabelText('form:input.email');

        expect(component).toBeInTheDocument();
    });

    it('should render password text field', function () {
        render(<MemoryRouter><LoginForm/></MemoryRouter>);

        const component = screen.getByLabelText('form:input.password');

        expect(component).toBeInTheDocument();
    });

    it('should render login button', function () {
        render(<MemoryRouter><LoginForm/></MemoryRouter>);

        const component = screen.getByText('translation:button.login');

        expect(component).toBeInTheDocument();
    });


})