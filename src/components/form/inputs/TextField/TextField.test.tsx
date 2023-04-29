import React from "react";
import {render,screen} from "@testing-library/react";
import TextField from "./TextField";

const label = 'label';
const name = 'name';
const value = 'value'
describe('TextField', () => {
    it('should render label', function () {
        render(<TextField onChange={(): void => {}} label={label} value={value} name={name}/>);

        const component = screen.getByLabelText(label);

        expect(component).toBeInTheDocument();
    });

    it('should render value', () => {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name}/>)

        const component = screen.getByLabelText(label);
        expect(component).toHaveValue(value);
    })

    it('should have name', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name}/>)
        const component = screen.getByLabelText(label);
        expect(component).toHaveAttribute('name');
    });

    it('should BE NOT required if required props not passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name}/>)
        const component = screen.getByLabelText(label);
        expect(component).not.toHaveAttribute('required');
    });

    it('should BE NOT required if required props = false passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} required={false}/>)
        const component = screen.getByLabelText(label);
        expect(component).not.toHaveAttribute('required');
    });

    it('should BE required if required props = true passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} required={true}/>)
        const component = screen.getByRole('textbox');
        expect(component).toHaveAttribute('required');
    });


    it('should BE NOT disabled if disabled props not passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name}/>)
        const component = screen.getByLabelText(label);
        expect(component).not.toHaveAttribute('disabled');
    });

    it('should BE NOT disabled if disabled props = false passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} disabled={false}/>)
        const component = screen.getByRole('textbox');
        expect(component).not.toHaveAttribute('disabled');
    });

    it('should BE disabled if disabled props = true passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} disabled={true}/>)
        const component = screen.getByLabelText(label);
        expect(component).toHaveAttribute('disabled');
    });

    it('should NOT contain placeholder if placeholder props not passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name}/>)
        const component = screen.getByLabelText(label);
        expect(component).not.toHaveAttribute('placeholder');
    });

    it('should NOT contain placeholder if placeholder props is passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} placeholder={'test'}/>)
        const component = screen.getByLabelText(label);
        expect(component).toHaveAttribute('placeholder');
    });

    it('should NOT contain helperText if helperText props not passed', function () {
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} />)
        const component = screen.queryByTestId('helper-text');
        expect(component).not.toBeInTheDocument()
    });

    it('should contain helperText if helperText props is passed passed', function () {
        const helperText = 'helperText';
        render(<TextField onChange={(): void => {}}  label={label} value={value} name={name} helperText={helperText}/>)
        const component = screen.getByText(helperText);
        expect(component).toBeInTheDocument()
    });
})