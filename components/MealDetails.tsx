import { StyleSheet, Text, View } from 'react-native';

type MealDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: object;
  textStyle?: object;
};

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) {
  return (
    <View>
      <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
        <Text style={[styles.detailItem, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailItem, textStyle]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  allergensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 4,
  },
  allergen: {
    marginHorizontal: 4,
    fontSize: 12,
    color: '#ffcc99',
  },
});
