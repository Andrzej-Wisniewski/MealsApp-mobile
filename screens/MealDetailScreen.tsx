import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';

import AllergenTags from '../components/MealDetail/AllergenTags';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

type MealsDetailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MealDetail'>;
  route: RouteProp<RootStackParamList, 'MealDetail'>;
};

function MealsDetailScreen({ route, navigation }: MealsDetailScreenProps) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) return null;

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Składniki: </Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Kroki: </Subtitle>
          <List data={selectedMeal.steps} />
          <Subtitle>Alergeny: </Subtitle>
          <AllergenTags
            isGlutenFree={selectedMeal.isGlutenFree}
            isLactoseFree={selectedMeal.isLactoseFree}
            isVegan={selectedMeal.isVegan}
            isVegetarian={selectedMeal.isVegetarian}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
