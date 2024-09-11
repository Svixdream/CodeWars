/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

function solution(str){
    const newString = [];
    for (let i = str.length - 1; i >= 0; i--) {
      newString.push(str[i])
    }
    return newString.join('')
  }