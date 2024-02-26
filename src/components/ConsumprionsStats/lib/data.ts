export type ConsumptionsCategory = "water" | "milk" | "powder" | "beans" | "syrup" | "days";

export interface ConsumptionsData {
    description: string
    iconSrc?: string
    category?: ConsumptionsCategory,
    unitType?: string[]
}

export const consumptionsData: ConsumptionsData[] = [
    {
        description: " of water",
        iconSrc: "assets/icons/water-drop.svg",
        category: "water",
        unitType: ['liters', 'gallons']
    }, {
        description: " of milk",
        iconSrc: "assets/icons/milk-bottle.svg",
        category: "milk",
        unitType: ['liters', 'gallons']
    }, {
        description: " of powder",
        iconSrc: "assets/icons/coffee-cup.svg",
        category: "powder",
        unitType: ['kg', 'funts']
    }, {
        description: " of beans",
        iconSrc: "assets/icons/coffee-beans.svg",
        category: "beans",
        unitType: ['kg', 'funts']
    }, {
        description: " of syrup",
        iconSrc: "assets/icons/syrup-bottle.svg",
        category: "syrup",
        unitType: ['liters', 'gallons']
    }, {
        description: "Please be aware thaty the quantities may differ from reality and that the numbers for today might not yet be completely avaible.",
    }
]