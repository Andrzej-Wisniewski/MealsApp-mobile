import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './types/navigation';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
            component={CategoriesScreen}
            options={{
              title: 'Kategorie',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealsDetailScreen}
            options={{
              title: 'Szczegóły',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
