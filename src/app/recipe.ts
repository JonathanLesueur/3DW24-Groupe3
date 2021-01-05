import { Ingredient } from './ingredient';
import { RecipeStep } from './recipe-step';

export interface Recipe {
    id: number,
    name: string,
    difficulty: {
        level: number,
        name: string
    },
    duration: number,
    ingredients?: Array<Ingredient>,
    steps?: Array<RecipeStep>
}