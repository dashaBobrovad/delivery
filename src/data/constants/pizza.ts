// типы теста для пиццы
export enum EPizzaDoughTypes {
  THIN = 'Тонкое',
  THICK = 'Толстое',
}

const pizzaDoughTypes: EPizzaDoughTypes[] = [
  EPizzaDoughTypes.THIN,
  EPizzaDoughTypes.THICK,
];

// категории пицц
export enum EPizzaCategories {
  ALL = 'Все',
  MEAT = 'Мясные',
  VEGAN = 'Вегетарианские',
  GRILL = 'Гриль',
  SPICY = 'Острые',
  CLOSED = 'Закрытые',
}

const pizzaCategories: EPizzaCategories[] = [
  EPizzaCategories.ALL,
  EPizzaCategories.MEAT,
  EPizzaCategories.VEGAN,
  EPizzaCategories.GRILL,
  EPizzaCategories.SPICY,
  EPizzaCategories.CLOSED
];

// размеры пицц
const pizzaSizes = [26, 30, 40];

export { pizzaDoughTypes, pizzaCategories, pizzaSizes };
