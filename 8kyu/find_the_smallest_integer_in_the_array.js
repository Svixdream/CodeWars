/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */



function findSmallestInt(arr) {
    //your code here
    let arrayNum = arr[0] // Этот элемент выбран в качестве начального значения для наименьшего элемента, предполагая, что это наименьший элемент на данный момент
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arrayNum) {
            arrayNum = arr[i];
        }
    }
    return arrayNum;
}
