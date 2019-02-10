import { Measure } from "./measure.model";

export class Food {
    name: string;
    measure: Measure;
    quantity: number;
    calories: number;


  constructor(name: string, measure: Measure, quantity: number, calories: number) {
    this.name = name;
    this.measure = measure;
    this.quantity = quantity;
    this.calories = calories;
  }
}
