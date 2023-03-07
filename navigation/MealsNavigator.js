import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";


// Stack Navigator
const Stack = createStackNavigator();

const MealStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white',
      }
    }>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categories',
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{
          headerTitle: 'CategoryMeals',
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailsScreen}
        options={{
          headerTitle: 'MealDetail',
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Meals"
        component={MealStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen}/>
    </Tab.Navigator>
  );
}

export default MealsFavTabNavigator;
