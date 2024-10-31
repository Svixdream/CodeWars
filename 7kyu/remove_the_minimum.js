/* The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

function removeSmallest(numbers, value) {
    if (numbers.length === 0) {
        return [] // В JavaScript (и многих других языках) пустой массив имеет длину 0, поскольку в нём нет элементов
    }
    const numbersCopy = [...numbers]; // Поверхностная копия означает, что ... скопирует только сами элементы массива. Если элементы — примитивные значения (например, числа или строки), копия будет полной
    const minIndex = numbersCopy.indexOf(Math.min(...numbersCopy))     // метод indexOf ищет позицию первого элемента, который соответствует заданному значению. Если элемент найден, indexOf возвращает его индекс (позицию в массиве, начиная с 0). Если элемент не найдеindexOf возвращает -1
    numbersCopy.splice(minIndex, 1) // splice(minIndex, 1) удаляет один элемент по индексу minIndex, который указывает на первое вхождение минимального значения в массиве
    return numbersCopy
}
    console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1])