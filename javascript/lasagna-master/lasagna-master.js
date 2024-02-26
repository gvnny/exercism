/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
    if (timeLeft > 0) {
        return 'Not done, please wait.';
    }
    if (timeLeft === 0) {
        return 'Lasagna is done.';
    }

    return 'You forgot to set the timer.';
}

export function preparationTime(layers, avarageTime = 2) {
    return layers.length * avarageTime;
}

export function quantities(layers) {
    let sauce = 0;
    let noodles = 0;

    for (let i = 0; i <= layers.length; i++) {
        if (layers[i] === 'sauce') {
            sauce += 1;
        }
        if (layers[i] === 'noodles') {
            noodles += 1;
        }
    }

    return { noodles: noodles * 50, sauce: sauce * 0.2 };
}

export function addSecretIngredient(friendList, yourList) {
    yourList.push(friendList.reduce((acc, cur) => cur));
}

export function scaleRecipe(recipe, portions) {
    const proportionalIncome = {};

    for (let i in recipe) {
        proportionalIncome[i] = recipe[i] * (portions / 2);
    }

    return proportionalIncome;
}