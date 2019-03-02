import { FoodGroup } from "../models/food-group.model";

export const FOOD_API = {
    KEY: 'VDsM2LdXGcEDjD6IxEy8GFlkFdQmIQ9x1gADuWNV',
    BASE_URL: 'https://api.nal.usda.gov/ndb',
}

export const FOOD_DATA_SOURCE = {
    BRANDED: 'Branded Food Products',
    STANDARD: 'Standard Reference',
}

export const FOOD_GROUPS = [
  new FoodGroup(1, 'Breakfast'),
  new FoodGroup(2, 'Dinner'),
  new FoodGroup(3, 'Lunch'),
]

export const FOOD_STORAGE_KEY = 'food_storage';
