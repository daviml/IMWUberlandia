import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather , FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons'

import Donate from './pages/Donate/index'
import Home from './pages/Home/index'
import Locations from './pages/Locations/index'
import Settings from './pages/Settings/index'

import { View, Text, Button } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          
        }}
      >
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={ color } solid />,
            title:({ color }) => <Text style={{ color: (color) }}>Início</Text>
          }}
          name="Home" 
          component={Home} 
        />
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color }) => <Feather name="map-pin" size={24} color={ color } />,
            title:({ color }) => <Text style={{ color: (color) }}>Onde</Text>
          }}
          name="Locations" 
          component={Locations} 
        />
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color }) => <FontAwesome5 name="donate" size={24} color={ color } />,
            title:({ color }) => <Text style={{ color: (color) }}>Doe</Text>
          }}
          name="Donate"
          component={Donate} 
        />
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color }) => <Feather name={'settings'} size={24} color={ color }  />,
            title:({ color }) => <Text style={{ color: (color) }}>Config</Text>
          }}
          name="Settings" 
          component={Settings} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// <Feather name="settings" size={50}/>
// <FontAwesome5 name="user-circle" size={50}/>

// <AntDesign  name="upcircleo" size={100}  />
// <Text style={{ fontSize: 20 }} >QUEM SOMOS</Text>

// <Ionicons name="people-outline" size={100}  />
// <Text style={{ fontSize: 20 }} >PASTORES</Text>

// <FontAwesome5 name="church" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >IGREJAS</Text>

// <Entypo name="spreadsheet" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >PREGAÇÔES</Text>              

// <FontAwesome name="heart-o" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >DOE</Text>

// <SimpleLineIcons name="camera" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >CULTO AO VIVO</Text>

// <FontAwesome5 name="calendar" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >PROGRAMAÇÕES</Text>

// <FontAwesome5 name="instagram" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >INSTAGRAM</Text>

// <FontAwesome5 name="pray" size={100} title="Go to VideosList" />
//               <Text style={{ fontSize: 20 }} >ORAÇÂO</Text>