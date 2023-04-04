import {render, screen} from "@testing-library/react";
import ThemeColorMode, {DARK_MODE, LIGHT_MODE, USER_COLOR_MODE} from "./ThemeColorMode";
import React from "react";
import {useTheme} from "@mui/material";

describe('ThemeColorMode', () => {
    it('should render light mode no key in localStorage', function () {
        const TestComponent: React.FC = (props) => {
            const theme = useTheme();
            return <div data-testid={"component"}>{theme.palette.mode}</div>
        }

        render(<ThemeColorMode><TestComponent/></ThemeColorMode>);

        const component = screen.queryByText(LIGHT_MODE, {exact: true});
        expect(component).not.toBeNull();
    });

    it('should render light mode with "light" key in localStorage', function () {
        localStorage.setItem(USER_COLOR_MODE, LIGHT_MODE);
        const TestComponent: React.FC = (props) => {
            const theme = useTheme();
            return <div data-testid={"component"}>{theme.palette.mode}</div>
        }

        render(<ThemeColorMode><TestComponent/></ThemeColorMode>);

        const component = screen.queryByText(LIGHT_MODE, {exact: true});
        expect(component).not.toBeNull();
    });


    it('should render dark mode with "dark" key in localStorage', function () {
        localStorage.setItem(USER_COLOR_MODE, DARK_MODE);
        const TestComponent: React.FC = (props) => {
            const theme = useTheme();
            return <div data-testid={"component"}>{theme.palette.mode}</div>
        }

        render(<ThemeColorMode><TestComponent/></ThemeColorMode>);

        const component = screen.queryByText(DARK_MODE, {exact: true});
        expect(component).not.toBeNull();
    });


    it('should render light mode when localStorage has different value than "dark" or "light"', function () {
        localStorage.setItem(USER_COLOR_MODE, 'example');
        const TestComponent: React.FC = (props) => {
            const theme = useTheme();
            return <div data-testid={"component"}>{theme.palette.mode}</div>
        }

        render(<ThemeColorMode><TestComponent/></ThemeColorMode>);

        const component = screen.queryByText(LIGHT_MODE, {exact: true});
        expect(component).not.toBeNull();
    });
})