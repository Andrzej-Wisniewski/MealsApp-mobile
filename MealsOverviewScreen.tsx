import { StyleSheet, Text, View } from 'react-native';

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Ekran przeglądu posiłków</Text>
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
