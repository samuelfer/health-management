import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import Login from "./screens/Login";

import FormUser from "./screens/FormUser";
import Tabs from './screens/Tabs';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={FormUser}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{ headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}