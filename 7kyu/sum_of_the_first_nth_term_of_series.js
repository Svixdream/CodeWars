function SeriesSum(n) {
    // Happy Coding ^_^
    let sum = 0 // необходима для хранения накопленной суммы членов последовательности
    for (let i = 0; i < n; i++) { 
       sum += 1 / (1 + i * 3)
    }
    return sum.toFixed(2)
}
console.log(SeriesSum(2));
