export type CuisineTag =
	| 'Italian'
	| 'Asian'
	| 'Indian'
	| 'Pakistani'
	| 'Japanese'
	| 'Moroccan'
	| 'Korean'
	| 'Greek'
	| 'Thai'
	| 'Turkish'
	| 'Mexican'
	| 'Russian'
	| 'Lebanese'
	| 'Brazilian'
	| 'Spanish'
	| 'Vietnamese'
	| 'Mediterranean'
	| 'Cuban'
	| 'Hawaiian'

export type FeatureTag = 'Vegetarian' | 'Grilling' | 'Quick'

export type DishTypeTag = string
export type IngredientTag = string

export type TagCategory =
	| [category: 'Cuisine', tags: CuisineTag[]]
	| [category: 'Dish type', tags: DishTypeTag[]]
	| [category: 'Ingredients', tags: IngredientTag[]]
	| [category: 'Features', tags: FeatureTag[]]

export type RecipeTagsData = TagCategory[]

export const tags: RecipeTagsData = [
	[
		'Cuisine',
		[
			'Italian',
			'Asian',
			'Indian',
			'Pakistani',
			'Japanese',
			'Moroccan',
			'Korean',
			'Greek',
			'Thai',
			'Turkish',
			'Mexican',
			'Russian',
			'Lebanese',
			'Brazilian',
			'Spanish',
			'Vietnamese',
			'Mediterranean',
			'Cuban',
			'Hawaiian',
		],
	],
	[
		'Dish type',
		[
			'Pizza',
			'Stir-fry',
			'Cookies',
			'Dessert',
			'Baking',
			'Pasta',
			'Salsa',
			'Salad',
			'Bruschetta',
			'Biryani',
			'Main course',
			'Soup',
			'Tagine',
			'Bibimbap',
			'Moussaka',
			'Butter chicken',
			'Curry',
			'Lassi',
			'Tiramisu',
			'Smoothie',
			'Elote',
			'Street food',
			'Borscht',
			'Dosa',
			'Falafel',
			'Wrap',
			'Caipirinha',
			'Cocktail',
			'Patatas bravas',
			'Spring rolls',
			'Quinoa salad',
			'Matcha ice cream',
			'Brigadeiros',
			'Enchiladas',
			'Shrimp curry',
			'Spanakopita',
			'Couscous salad',
			'Mojito',
			'Teriyaki chicken',
			'Mango salsa',
			'Shrimp stir-fry',
			'Margherita pizza',
			'Pesto pasta',
			'Chicken skewers',
			'Sushi rolls',
			'Chickpea salad',
		],
	],
	[
		'Ingredients',
		[
			'Quinoa',
			'Chicken',
			'Beef',
			'Shrimp',
			'Karahi',
			'Keema',
			'Potatoes',
			'Kebabs',
			'Saag',
			'Roti',
			'Ramen',
			'Chickpea',
			'Rice',
			'Mango',
			'Blueberry',
			'Banana',
			'Pineapple',
			'Coconut',
		],
	],
	['Features', ['Vegetarian', 'Grilling', 'Quick']],
]
