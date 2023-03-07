import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import CategoryGridTile from "../components/CategoryGridTile";
import {CATEGORIES} from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=>{
          props.navigation.navigate({
            name: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export  default CategoriesScreen;
