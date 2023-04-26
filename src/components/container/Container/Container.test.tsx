import React from "react";
import {render, screen} from "@testing-library/react";
import Container from "./Container";
import {createTheme, hexToRgb, ThemeProvider} from "@mui/material";

const text = 'test';
const darkBackgroundColor = '#212121';
const lightBackgroundColor = '#9e9e9e';

const lightTheme = createTheme({
    palette: {
       mode: 'light'
    }
});
const darkTheme = createTheme({
    palette: {
       mode: 'dark'
    }
});
describe('Container', () => {
    it('should have width with value passed in props', function () {
        render(<Container width={300}>{text}</Container>);

        const component = screen.getByText(text);
        const {width} = getComputedStyle(component);

        expect(width).toBe('300px');
    });

    it('should have height with value passed in props', function () {
        render(<Container height={300}>{text}</Container>);

        const component = screen.getByText(text);
        const {height} = getComputedStyle(component);

        expect(height).toBe('300px');
    });

    it('should have 100% width when no width props passed', function () {
        render(<Container>{text}</Container>);

        const component = screen.getByText(text);
        const {width} = getComputedStyle(component);

        expect(width).toBe('100%');
    });

    it('should have 100% height when no height props passed', function () {
        render(<Container>{text}</Container>);

        const component = screen.getByText(text);
        const {height} = getComputedStyle(component);

        expect(height).toBe('100%');
    });

    it('should have proper background color when dark mode is active', function () {
        render(<ThemeProvider theme={darkTheme}><Container>{text}</Container></ThemeProvider>);

        const component = screen.getByText(text);
        const {backgroundColor} = getComputedStyle(component);

        expect(backgroundColor).toBe(hexToRgb(darkBackgroundColor));
    });

    it('should have proper background color when light mode is active', function () {
        render(<ThemeProvider theme={lightTheme}><Container>{text}</Container></ThemeProvider>);

        const component = screen.getByText(text);
        const {backgroundColor} = getComputedStyle(component);

        expect(backgroundColor).toBe(hexToRgb(lightBackgroundColor));
    });

    it('should have proper background color when transparent props passed', function () {
        render(<Container transparent>{text}</Container>);

        const component = screen.getByText(text);
        const {backgroundColor} = getComputedStyle(component);

        expect(backgroundColor).toBe("");
    });
})