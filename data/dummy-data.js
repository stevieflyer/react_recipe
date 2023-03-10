import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced'),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://th.bing.com/th/id/R.47d191acfb99275845924014070ff941?rik=GVWaX5H83nAq7w&riu=http%3a%2f%2fassets.marthastewart.com%2fstyles%2fwmax-520-highdpi%2fd23%2fmsledf_0304_spag_3sauce%2fmsledf_0304_spag_3sauce_vert.jpg%3fitok%3d4XZx87ZK&ehk=5%2bvuVCOP6f4ZU1RutOQ80cOq9tBFb3tSkKL2NsbmP6I%3d&risl=&pid=ImgRaw&r=0',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
'Cheese (optional)',
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.',
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://img.chefkoch-cdn.de/rezepte/260491101742498/bilder/668439/crop-960x720/toast-hawaii.jpg',
    10,
    [
      '2 Slices of Bread',
      '1 Slice of Ham',
      '1 Slice of Pineapple',
      '1/2 Teaspoon of Butter',
      '1/4 Teaspoon of Sugar',
    ],
    [
      'Butter one side of each slice of bread.',
      'Layer ham, pineapple and cheese on the bread.',
      'Toast the bread in a pan or toaster until golden brown.',
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://th.bing.com/th/id/R.8946e10a2dc06335176e66a895ebc187?rik=HkaV4oVqHS7bHQ&riu=http%3a%2f%2fimages.media-allrecipes.com%2fuserphotos%2f960x960%2f3757723.jpg&ehk=aFAF%2buIjH1v%2fJNECcIK41A8z255yDgsvBlm4u2pjzNE%3d&risl=&pid=ImgRaw&r=0',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
    ],
[
      'Form 2 patties',
      'Fry the patties for cca 4 minutes on each side',
      'Serve burger with tomato, cucumber and onion',
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://www.thespruceeats.com/thmb/Oi7uJY5iWmBlt8d0Oqt7qxsFfFw=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/wiener-schnitzel-recipe-1447089-Final-5b9be0b7c9e77c0057a39572.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      'Lemon Slices',
      'Capers',
      'Parsley',
    ],
    [
      'Tenderize the veal with a mallet, between 2 sheets of parchment paper.',
      'Season flour with salt and pepper.',
      'Dredge veal in flour to coat.',
      'Dip in egg, and then coat with bread crumbs.',
      'In a heavy skillet, melt butter over medium high heat.',
      'Fry schnitzel, in batches and do not crowd the pan, until golden brown, about 3 minutes per side.',
      'Transfer to a paper towel lined plate.',
      'Sprinkle with lemon juice, capers and parsley before serving.',
    ],
    true,
    false,
    false,
    false
  ),
  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2016%2F06%2F03%2F7669448.jpg',
    15,
    [
      'Arugula',
      'Lamb\'s Lettuce',
      'Parsley',
      'Fennel',
      'Smoked Salmon',
      'Mustard',
      'Lemon Juice',
      'Olive Oil',
      'Salt & Pepper',
    ],
    [
      'Wash and spin-dry all greens.',
      'Add the salmon, fennel, parsley and dressing.',
      'Toss to combine.',
    ],
    false,
    false,
    true,
    true
  ),
  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://iambaker.net/wp-content/uploads/2019/06/mousse-1.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel',
    ],
    [
      'Dissolve gelatine in pot.',
      'Add orange juice and sugar and stir until sugar has dissolved.',
      'Take pot off the stove and add the yoghurt.',
      'Whip the cream and stir into the yoghurt mixture.',
      'Refrigerate for at least 4 hours.',
      'Serve with orange peel.',
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://www.thecookierookie.com/wp-content/uploads/2019/04/easy-banana-pancakes-blender-pancakes-4-of-10.jpg',
    20,
    [
      '1 Cup All-Purpose Flour',
      '3 Teaspoons Baking Powder',
        '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 Cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted',
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
      'Brown on both sides and serve hot.',
    ],
    true,
    false,
    false,
    false
  ),
  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://th.bing.com/th/id/OIP.PyvlHZwkVjoMb1xBmJVndAHaHX?pid=ImgDet&rs=1',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons of Olive Oil',
      '1 Teaspoon of Cumin',
      '1 Teaspoon of Garam Masala',
      '1 Teaspoon of Paprika',
      '400ml Coconut Milk',
    ],
    [
      'Cut chicken into bite sized pieces.',
      'Finely dice onion and garlic.',
      'Peel and grate the ginger.',
      'Heat the olive oil in a pan and saute the onion, garlic and ginger.',
      'Add the spices and stir for 1 minute.',
      'Add the chicken pieces and stir fry for 5-8 minutes.',
      'Add the coconut milk and simmer for 10 minutes.',
      'Serve with rice.',
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://i.pinimg.com/originals/bd/be/55/bdbe55ccf872497bb7bbf503f6849923.jpg',
    45,
    [
      '2 Egg Yolks',
      '75g Sugar',
      '2 Tablespoons Cocoa Powder',
      '1 Pinch Salt',
      '1 Cup Milk',
      '2 Tablespoons Butter',
      '2 Egg Whites',
      '1 Pinch Cream of Tartar',
    ],
    [
      'Preheat oven to 180 degrees C.',
      'Grease 4 ramekins.',
      'Place egg yolks, sugar, cocoa powder and salt in a heatproof bowl.',
      'Heat milk in a saucepan until bubbles form around the edge.',
      'Pour milk over egg yolk mixture, whisking constantly.',
      'Place bowl over a saucepan of simmering water.',
      'Whisk constantly until the mixture thickens and coats the back of a spoon.',
      'Remove from heat, stir in butter.',
      'Whisk egg whites in a clean bowl until foamy.',
      'Add cream of tartar and whisk until soft peaks form.',
      'Gently fold a spoonful of egg whites into yolk mixture to lighten.',
      'Fold in remaining egg whites gently but thoroughly.',
      'Divide the mixture between the prepared ramekins.',
      'Place ramekins on a baking sheet.',
      'Bake in preheated oven until puffed and firm to the touch, about 12 minutes.',
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://i.pinimg.com/originals/ad/80/36/ad8036243f0a2b3346d8dede187f0b36.png',
    10,
    [
      '250g Asparagus',
      '250g Cherry Tomatoes',
      '1 Shallot',
      'Olive Oil',
      'Salt & Pepper',
      'Balsamic Vinegar',
    ],
    [
      'Wash and trim the asparagus and cut into bite sized pieces.',
      'Halve the cherry tomatoes.',
      'Peel and dice the shallot.',
      'Toss all ingredients with olive oil, season with salt and pepper and vinegar.',
    ],
    true,
    false,
    false,
    true
  ),
];

export default MEALS;

