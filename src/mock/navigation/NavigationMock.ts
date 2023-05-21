import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {OverridableComponent} from "@mui/material/OverridableComponent";

interface NavigationMockInterface {
    name: string;
    icon: OverridableComponent<any>
}

export const NavigationMock: Array<NavigationMockInterface> = [
    {name: 'navigation:main_navigation.diet', icon: RestaurantMenuIcon}
]