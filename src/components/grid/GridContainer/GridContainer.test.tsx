import React from "react";
import {render, screen} from "@testing-library/react";
import GridItem from "../GridItem/GridItem";
import GridContainer from "./GridContainer";
describe('GridContainer', () => {
    it('should render single element', function () {
        render(<GridContainer test-id={'test'}><GridItem>item1</GridItem></GridContainer>);

        const component = screen.getByText('item1');
        expect(component).toBeInTheDocument();
    });
})