import React from 'react';
import {render, screen} from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import {MemoryRouter} from "react-router-dom";

describe('Register page', (): void => {
    it('should render email input', function () {
        render(<MemoryRouter><RegisterForm/></MemoryRouter>);

        const component = screen.getByLabelText('form:input.email');

        expect(component).toBeInTheDocument();
    });

    it('should render password input', function () {
        render(<MemoryRouter><RegisterForm/></MemoryRouter>);

        const component = screen.getByLabelText('form:input.password');

        expect(component).toBeInTheDocument();
    });

    it('should render register confirm button', function () {
        render(<MemoryRouter><RegisterForm/></MemoryRouter>);

        const component = screen.getByText('translation:button.register');

        expect(component).toBeInTheDocument();
    });

})