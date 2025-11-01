import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { BottomTabParamList, RootStackParamList } from './types/navigation';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealsDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { store } from './store/store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#311c0e' },
        headerTintColor: 'white',
        sceneStyle: { backgroundColor: '#563927' },
        tabBarStyle: { backgroundColor: '#311c0e' },
        tabBarActiveTintColor: '#eacdb0',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#422d1f',
      }}
    >
      <Tab.Screen
        name="Kategorie"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ulubione"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#311c0e' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#563927' },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={BottomTabsNavigator}
              options={{ headerShown: false, title: 'Kategorie' }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={({ route }) => ({
                title: route.params.categoryId,
              })}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealsDetailScreen}
              options={{ title: 'Szczegóły' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
