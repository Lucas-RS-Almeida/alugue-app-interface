import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'ALUGUE',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 16 }}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{
            title: 'DETALHE',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 16 }}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
