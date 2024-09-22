/* You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#). */

const whosOnline = function (friends) { // мы определяем параметр friends, который будет принимать массив объектов с информацией о пользователях, таких как имя (username), статус (online/offline) и время последней активности (lastActivity)
    // Your code here...
    // Если длина равна 0, значит, в массиве нет объектов
    if (friends.length === 0) { // if: Мы проверяем, пуст ли массив friends, то есть есть ли в нем вообще пользователи.
        return {}; // если список пуст, нет необходимости продолжать — мы сразу возвращаем пустой объект {}
    } // Пустой объект обозначает, что в чате нет друзей

    // Инициализируем объект для хранения пользователей по категориям
    const result = {
        online: [],
        offline: [],
        away: []
    }

    // Перебираем всех друзей и проверяем их статус
    for (let i = 0; i < friends.length; i++) {
        let user = friends[i]; // На каждой итерации мы присваиваем переменной user текущий элемент массива friends, Теперь user — это объект с информацией о конкретном пользователе


        // Проверяем статус
        if (user.status === 'offline') { // Если статус "offline", мы добавляем его имя в массив offline
            result.offline.push(user.username) // Добавляем в массив offline внутри объекта result

        } else if (user.status === 'online' && user.lastActivity <= 10) {
            result.online.push(user.username) // Добавляем в online

        } else if (user.status === 'online' && user.lastActivity > 10) {
            result.away.push(user.username) // Добавляем в away
        }
    }

    if (result.online.length === 0) delete result.online // Если в массиве online нет пользователей, мы удаляем это поле из объекта result, Эта команда удаляет свойство online из объекта result
    if (result.offline.length === 0) delete result.offline
    if (result.away.length === 0) delete result.away

    return result // В конце функции мы возвращаем объект result, который содержит массивы online, offline, и away (если они не пустые)
}