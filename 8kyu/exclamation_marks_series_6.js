/* Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi" */

function remove(s, n) {
    //coding and coding....
    let count = 0;
    return s.replace(/!/g, function() { // str.replace(/!/g, function(match) {...}): Мы используем метод replace(), который принимает регулярное выражение /!/g. Это выражение ищет все восклицательные знаки в строке. Флаг g означает "глобально", что позволяет найти все совпадения, а не только первое, Это функция обратного вызова, которая вызывается для каждого найденного восклицательного знака.

        if (count < n) { // Проверяем, меньше ли счетчик count значения n. Если да, значит, мы еще не удалили нужное количество восклицательных знаков
            count++;
            return ''; // Если условие истинно, возвращаем пустую строку, что приводит к удалению восклицательного знака
        }
        return '!'; // Оставляем восклицательный знак, т.е. мы уже удалили достаточное количество восклицательных знаков
    })
  }