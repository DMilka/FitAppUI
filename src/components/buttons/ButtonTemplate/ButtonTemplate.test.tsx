import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ButtonTemplate from "./ButtonTemplate";
import userEvent from "@testing-library/user-event";

const label = 'label';
describe('ButtonTemplate', () => {
    it('should render button with provided label by props', function () {
        render(<ButtonTemplate label={label} onClick={() => {}}/>);

        const component = screen.getByText(label);

        expect(component).toBeInTheDocument();
    });

    it('should be disabled if disabled props is true', function () {
        render(<ButtonTemplate label={label} disabled={true} onClick={() => {}}/>);

        const component = screen.getByText(label);

        expect(component).toBeDisabled();
    });

    it('should be NOT disabled if disabled props is false', function () {
        render(<ButtonTemplate label={label} disabled={false} onClick={() => {}}/>);

        const component = screen.getByText(label);

        expect(component).not.toBeDisabled();
    });

    it('should be NOT disabled if disabled props not passed', function () {
        render(<ButtonTemplate label={label} onClick={() => {}}/>);

        const component = screen.getByText(label);

        expect(component).not.toBeDisabled();
    });

    it('should call the onClick function', function () {
        const onClickMock = jest.fn();
        render(<ButtonTemplate label={label} onClick={onClickMock}/>);

        const component = screen.getByText(label);

        userEvent.click(component);

        expect(onClickMock).toHaveBeenCalled();
    });

    it('should NOT call onClick function when button is disabled', function () {
        const onClickMock = jest.fn();
        render(<ButtonTemplate label={label} onClick={onClickMock} disabled={true}/>);

        const component = screen.getByText(label);

        fireEvent.click(component);

        expect(onClickMock).not.toHaveBeenCalled();
    });
})