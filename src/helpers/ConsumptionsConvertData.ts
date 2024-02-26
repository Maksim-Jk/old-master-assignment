import {DataItem} from "@/models/sales.ts";

interface Ingredients {
    water: number;
    milk: number;
    powder: number;
    beans: number;
    syrup: number;
    days: number;
}


export const ConsumptionsConvertData = (data: DataItem[], unitType: "METRIC" | "US"): Ingredients => {
    const ingredients: Ingredients = {
        water: 0,
        milk: 0,
        powder: 0,
        beans: 0,
        syrup: 0,
        days: 0
    };

    const uniqueDates = new Set<string>();

    data.forEach(item => {
        const gallonsCoefficient = unitType === "US" ? 0.264172 : 1;
        const funtsCoefficient = unitType === "US" ? 0.035314 : 1;
        const {recipie, summed_dispendings, local_date} = item;
        const volume = parseInt(recipie.match(/\d+/)?.[0] || '0'); // Извлекаем объем напитка из названия
        const coffeeRatio = 10 * (volume / 100); // 10 г кофе на каждые 100 мл
        const waterRatio = 100 * (volume / 100); // 100 мл воды на каждые 100 мл
        const milkRatio = 150 * (volume / 100); // 150 мл молока на каждые 100 мл
        const powderRatio = 20 * (volume / 100); // 20 г порошка на каждые 100 мл
        const syrupRatio = 10 * (volume / 100); // 10 мл сиропа на каждые 100 мл

        switch (true) {
            case /Капучино/.test(recipie):
                ingredients.water += waterRatio * summed_dispendings / 1000 * gallonsCoefficient;
                ingredients.milk += milkRatio * summed_dispendings / 1000 * gallonsCoefficient;
                ingredients.powder += powderRatio * summed_dispendings / 1000 * funtsCoefficient;
                ingredients.beans += coffeeRatio * summed_dispendings / 1000 * funtsCoefficient;
                ingredients.syrup += syrupRatio * summed_dispendings / 1000 * gallonsCoefficient;
                break;
            case /Американо/.test(recipie):
                ingredients.water += waterRatio * summed_dispendings / 1000 * gallonsCoefficient;
                ingredients.beans += coffeeRatio * summed_dispendings / 1000 * funtsCoefficient;
                break;
        }

        uniqueDates.add(local_date);
    });

    ingredients.syrup = ingredients.syrup / 1000;
    ingredients.days = uniqueDates.size;

    return ingredients;
};
