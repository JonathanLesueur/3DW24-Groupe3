import { Recipe } from './recipe';

export const RECIPES: Recipe[] = [
    {
        id: 1,
        name: "Pavé de saumon",
        difficulty: {
            level: 1,
            name: "Très facile"
        },
        duration: 20
    },
    {
        id: 2,
        name: "Tagliatelles aux champignons",
        difficulty: {
            level: 1,
            name: "Très facile"
        },
        duration: 15
    },
    {
        id: 3,
        name: "Burger d'agneau",
        difficulty: {
            level: 2,
            name: "Normale"
        },
        duration: 40
    },
    {
        id: 4,
        name: "Chou rouge aux marrons",
        difficulty: {
            level: 2,
            name: "Normale"
        },
        duration: 60
    },
    {
        id: 5,
        name: "Nouilles sautées",
        difficulty: {
            level: 1,
            name: "Facile"
        },
        duration: 15
    }
]
