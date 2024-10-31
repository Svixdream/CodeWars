/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
    // TODO
    const result = {}
    if (string.length === 0) {
        return result; // Возвращаем пустой объект
    } for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
    }
    return result;
}
