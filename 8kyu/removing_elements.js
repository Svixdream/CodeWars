/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr) {
    //your code here
    return arr.filter((_, index) => index % 2 === 0); // _— это параметр, представляющий текущий элемент массива. Здесь он обозначен как _только потому, что он не используется в самой функции. Это просто соглашение, которое часто применяется к ненужным параметрам, чтобы показать, что оно не будет использоваться. Вы можете называть его как угодно, но _помогает читать код и понимать, что значение элемента неважно для логики фильтра
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);