import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, ListRenderItem } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES, CategoryType } from '../data/dummy-data';
import { RootStackParamList } from '../types/navigation';

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MealsCategories'>;
};

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  const renderCategoryItem: ListRenderItem<CategoryType> = (itemData) => {
    function pressHandler() {
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
