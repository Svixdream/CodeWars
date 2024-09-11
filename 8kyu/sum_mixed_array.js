/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
    let arrayNum = 0; // Инициализируем переменную sum для хранения итоговой суммы
    for (let i = 0; i < x.length; i++) {
        arrayNum += Number(x[i]) // Преобразуем текущий элемент в число и добавляем его к переменной arrayNum
    }
    return arrayNum;
}