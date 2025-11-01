import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { RootStackParamList } from '../types/navigation';

type MealsOverviewScreenProps = {
  route: RouteProp<RootStackParamList, 'MealsOverview'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'MealsOverview'>;
};

function MealsOverviewScreen({ route, navigation }: MealsOverviewScreenProps) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({
      title: category ? category.title : 'Meals',
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
