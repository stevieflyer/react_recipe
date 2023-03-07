import React, {useEffect} from 'react';
import {
  StyleSheet,
  View, Text, FlatList,
} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useNavigation} from "@react-navigation/native";

const CategoryMealsScreen = props => {
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(category => category.id === catId);
  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  // update navigation title
  const navigation = useNavigation();
  useEffect(()=> {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    })
  }, [])

  const renderMealItem = itemData => {
    return (
      <MealItem
        onSelectMeal={()=>{
          props.navigation.navigate({
            name: 'MealDetail',
            params: {
              mealId: itemData.item.id,
            },
          })
        }}
        title={itemData.item.title}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        style={styles.mealsList}
        data={displayMeals}
        renderItem={renderMealItem}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mealsList: {
    width: '100%',
  },
});

export  default CategoryMealsScreen;
