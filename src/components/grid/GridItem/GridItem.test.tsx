import React from "react";
import {render, screen} from "@testing-library/react";
import GridItem from "./GridItem";
describe('GridContainer', () => {
    it('should render single element', function () {
        render(<GridItem>item1</GridItem>);

        const component = screen.getByText('item1');
        expect(component).toBeInTheDocument();
    });
})