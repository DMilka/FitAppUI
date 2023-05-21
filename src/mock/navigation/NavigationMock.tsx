import React from 'react';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Diet from "../../pages/Dashboard/pages/Diet/Diet";

interface NavigationMockInterface {
    name: string;
    path: string;
    icon: React.ReactElement
    element: React.ReactElement
}

export const navigationMock: Array<NavigationMockInterface> = [
    {name: 'navigation:main_navigation.diet', icon: <RestaurantMenuIcon/>, path: 'diet', element: <Diet/>}
]
export const navigationRouterChildren: Array<{path: string, element: React.ReactElement}> = navigationMock.map(navItem => ({
    path: navItem.path,
    element: navItem.element
}));