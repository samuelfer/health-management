import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import _IonIcon from 'react-native-vector-icons/Ionicons';
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Pesquisar from "./Pesquisar";
import Principal from "./Principal";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#3d6868"
    },
    tabBarActiveTintColor: "#a7c686",
    tabBarInactiveTintColor: "#fff"
};

const tabs = [
   {
     name: 'Principal',
     component: Principal,
     icon: 'home'
   },
   {
    name: 'Consultas',
    component: Consultas,
    icon: 'calendar'
  },
  {
    name: 'Pesquisar',
    component: Pesquisar,
    icon: 'search'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person'
  }
]

export default function Tabs() {
    return (
            <Tab.Navigator screenOptions={screenOptions}>
               { tabs.map((tab) => (
                    <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <_IonIcon name={tab.icon} color={color} size={size} />
                            )
                        }}
                    >
                </Tab.Screen>
                ))
                
              }
            </Tab.Navigator>
    )
}