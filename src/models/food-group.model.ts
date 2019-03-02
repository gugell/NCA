import { Food } from "./food.model";

export class FoodGroup {
  id: number;
  name: string;
  foodList: Array<Food>;


  constructor(id: number, name: string, foodList: Array<Food> = [] ) {
    this.id = id;
    this.name = name;
    this.foodList = foodList;
  }
}
