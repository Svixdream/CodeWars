/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr
        .filter(arr => arr > 0) // Метод filter здесь используется, чтобы оставить только положительные числа в массиве arr, 
        // Вы проходите по каждому числу и говорите: "Если это число больше нуля, я оставлю его; если нет, пропущу
        .reduce((arr, num) => arr + num, 0) // значение 0 указывает, с какого числа начинать суммирование и адльше оно складывает все числа
}