import React from "react";

import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            headeShown="false"
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            <RestaurantStack.Screen
                name="RestaurantList"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};
