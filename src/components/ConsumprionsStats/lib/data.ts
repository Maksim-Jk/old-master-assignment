export type ConsumptionsCategory = "water" | "milk" | "powder" | "beans" | "syrup" | "days";

export interface ConsumptionsData {
  description: string
  iconSrc?: string
  category?: ConsumptionsCategory
}

export const consumptionsData: ConsumptionsData[] = [
  {
    description: "liters of water",
    iconSrc: "assets/icons/water-drop.svg",
    category: "water"
  }, {
    description: "liters of milk",
    iconSrc: "assets/icons/milk-bottle.svg",
    category: "milk"
  }, {
    description: "kg of prowder",
    iconSrc: "assets/icons/coffee-cup.svg",
    category: "powder"
  }, {
    description: "kg of beans",
    iconSrc: "assets/icons/coffee-beans.svg",
    category: "beans"
  }, {
    description: "liters of syrup",
    iconSrc: "assets/icons/syrup-bottle.svg",
    category: "syrup"
  }, {
    description: "Please be aware thaty the quantities may differ from reality and that the numbers for today might not yet be completely avaible.",
  }
]