interface Ingredients {
    water: number;
    milk: number;
    powder: number;
    beans: number;
    syrup: number;
    days: number;
}

export const ConsumptionsConvertData = (data: any[]): Ingredients => {
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
        const {recipie, summed_dispendings, local_date} = item;
        const volume = parseInt(recipie.match(/\d+/)?.[0] || '0'); // Извлекаем объем напитка из названия
        const coffeeRatio = 10 * (volume / 100); // 10 г кофе на каждые 100 мл
        const waterRatio = 100 * (volume / 100); // 100 мл воды на каждые 100 мл
        const milkRatio = 150 * (volume / 100); // 150 мл молока на каждые 100 мл
        const powderRatio = 20 * (volume / 100); // 20 г порошка на каждые 100 мл
        const syrupRatio = 10 * (volume / 100); // 10 мл сиропа на каждые 100 мл

        switch (true) {
            case /Капучино/.test(recipie):
                ingredients.water += waterRatio * summed_dispendings;
                ingredients.milk += milkRatio * summed_dispendings;
                ingredients.powder += powderRatio * summed_dispendings;
                ingredients.beans += coffeeRatio * summed_dispendings;
                ingredients.syrup += syrupRatio * summed_dispendings;
                break;
            case /Американо/.test(recipie):
                ingredients.water += waterRatio * summed_dispendings;
                ingredients.beans += coffeeRatio * summed_dispendings;
                break;
            // Добавьте кейсы для других видов напитков, если необходимо
        }

        uniqueDates.add(local_date);
    });

    // Преобразуем сироп в литры
    ingredients.syrup = ingredients.syrup / 1000;
    ingredients.days = uniqueDates.size;

    return ingredients;
};
