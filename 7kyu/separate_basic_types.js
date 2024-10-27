/* Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
} */

function separateTypes(input) {
    const categorized = {}; // Инициализируем пустой объект для хранения результатов

    // Проходим по каждому значению во входном массиве
    input.forEach(value => {
        const type = typeof value; // Определяем тип текущего значения

        // Проверяем, существует ли уже массив для данного типа в объекте
        if (!categorized[type]) {
            categorized[type] = []; // Создаем новый массив, если его нет
        }

        // Добавляем текущее значение в соответствующий массив
        categorized[type].push(value);
    });

    return categorized; // Возвращаем получившийся объект
}