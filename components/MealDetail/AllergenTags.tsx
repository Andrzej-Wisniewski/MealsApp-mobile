import { StyleSheet, Text, View } from 'react-native';
import { MealAllergens } from '../../types/meal';

function AllergenTags({
  isGlutenFree,
  isLactoseFree,
  isVegan,
  isVegetarian,
}: MealAllergens) {
  return (
    <View style={styles.container}>
      {isGlutenFree && (
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Bez glutenu</Text>
        </View>
      )}
      {isLactoseFree && (
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Bez laktozy</Text>
        </View>
      )}
      {isVegan && (
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Wegańskie</Text>
        </View>
      )}
      {isVegetarian && (
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Wegetariańskie</Text>
        </View>
      )}
    </View>
  );
}

export default AllergenTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    width: '100%',
  },
  tagContainer: {
    marginHorizontal: 6,
    marginVertical: 2,
  },
  tag: {
    fontSize: 12,
    fontWeight: '500',
    color: '#e2b497',
  },
});
