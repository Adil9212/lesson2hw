// Шахматная доска

const num1 = 8;
let board = '';

for (let i = 0; i < num1; i++) {
    for (let x = 0; x < num1; x++) {
        if ((i + x) % 2 == 0) {
            board += ' '
        } else board += '#'
    }
    board += '\n'
}
console.log(board);
//  FizzBuzz

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
// Треугольник в цикле
for (var num = "*"; num.length <= 7; num += "*")
    console.log(num);

// 6) Задача:

let arr1 = [1, true, false, undefined];
let arr2 = ['Sasha', 'Alina', false, undefined];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== undefined) {
        arr1[i] = arr2[i];
    }
}

console.log(arr1);

// 5) Задача:

let arry = ['Алина', 'Саша', 'Алекс'];
console.log(arry[0]);

// 4) Задача:

const mass = ['Alex', 'Anna', 'Oleg', '1', '2', '3', true]
console.log(mass);