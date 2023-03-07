import React, {useEffect} from 'react';
import {
  StyleSheet,
   View, Text,
} from 'react-native';
import MEALS from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../navigation/HeaderButton";
import {useNavigation} from "@react-navigation/native";

const MealDetailsScreen = props => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  // update navigation
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: ()=>{
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title={'Favorite'}
              iconName='ios-star'
              onPress={() => {
                console.log('Mark as Favorite!');
              }}
            />
          </HeaderButtons>
        )
      }
    })
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export  default MealDetailsScreen;
