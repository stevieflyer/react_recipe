import React from 'react';
import {
  StyleSheet,
  FlatList, View, Text,
} from 'react-native';

const FavoritesScreen = props => {
  return (
    <View>
      <Text>The Favorites Category Screen</Text>
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

export  default FavoritesScreen;
