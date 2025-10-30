import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealType } from '../models/meals';
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

  const renderMealItem: ListRenderItem<MealType> = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
