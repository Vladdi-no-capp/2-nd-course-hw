function simpleArithmeticGame() {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer;

    if (operation === '+') {
        correctAnswer = firstNumber + secondNumber;
    } else if (operation === '-') {
        correctAnswer = firstNumber - secondNumber;
    } else if (operation === '*') {
        correctAnswer = firstNumber * secondNumber;
    } else {
        correctAnswer = Math.round(firstNumber / secondNumber);
    }

    const userInput = prompt(`${firstNumber} ${operation} ${secondNumber} = ?`);
    const userAnswer = Number(userInput);

    if (userInput === null || userInput.trim() === '' || Number.isNaN(userAnswer)) {
        alert('Ответ должен быть числом');
        return;
    }

    if (userAnswer === correctAnswer) {
        alert('Правильно!');
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
}

// Задание 1
const task1Array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < task1Array.length; i++) {
    console.log(task1Array[i]);

    if (task1Array[i] === 10) {
        break;
    }
}

// Задание 2
const task2Array = [1, 5, 4, 10, 0, 3];
console.log(task2Array.indexOf(4));

// Задание 3
const task3Array = [1, 3, 5, 10, 20];
console.log(task3Array.join(' '));

// Задание 4
const task4Array = [];

for (let i = 0; i < 3; i++) {
    const nestedArray = [];

    for (let j = 0; j < 3; j++) {
        nestedArray.push(1);
    }

    task4Array.push(nestedArray);
}

console.log(task4Array);

// Задание 5
const task5Array = [1, 1, 1];
task5Array.push(2, 2, 2);
console.log(task5Array);

// Задание 6
const task6Array = [9, 8, 7, 'a', 6, 5];
task6Array.sort();
task6Array.pop();
console.log(task6Array);

// Задание 7
function guessArrayNumber() {
    const task7Array = [9, 8, 7, 6, 5];
    const userNumber = Number(prompt('Угадайте число'));

    if (task7Array.includes(userNumber)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
}

function startQuiz() {
    const quiz = [
        {
            question: 'Какая планета самая близкая к Солнцу?',
            options: ['Венера', 'Меркурий', 'Марс'],
            correctIndex: 1,
        },
        {
            question: 'Сколько дней в високосном году?',
            options: ['365', '366', '364'],
            correctIndex: 1,
        },
        {
            question: 'Какой язык программирования используется для веб-страниц?',
            options: ['Python', 'JavaScript', 'C++'],
            correctIndex: 1,
        },
    ];

    let correctAnswers = 0;

    quiz.forEach((item, index) => {
        const answer = prompt(
            `Вопрос ${index + 1}: ${item.question}\n1) ${item.options[0]}\n2) ${item.options[1]}\n3) ${item.options[2]}\nВведите номер ответа (1-3)`
        );

        const selectedIndex = Number(answer) - 1;

        if (selectedIndex === item.correctIndex) {
            correctAnswers += 1;
        }
    });

    alert(`Вы правильно ответили на ${correctAnswers} из ${quiz.length} вопросов.`);
}

// Задание 8
const task8String = 'abcdef';
console.log(task8String.split('').reverse().join(''));

// Задание 9
const task9Array = [[1, 2, 3], [4, 5, 6]];
console.log(task9Array.flat());

// Задание 10
const task10Array = [2, 5, 7, 1, 10, 4];

for (let i = 0; i < task10Array.length - 1; i++) {
    console.log(task10Array[i] + task10Array[i + 1]);
}

// Задание 11
function getSquares(numbers) {
    return numbers.map((number) => number ** 2);
}

console.log(getSquares([1, 2, 3, 4]));

// Задание 12
function getWordLengths(words) {
    return words.map((word) => word.length);
}

console.log(getWordLengths(['apple', 'cat', 'javascript']));

// Задание 13
function getNegativeNumbers(numbers) {
    return numbers.filter((number) => number < 0);
}

console.log(getNegativeNumbers([1, -2, 3, -4, 5, -6]));

// Задание 14
const task14Array = [];
const evenNumbers = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.round(Math.random() * 10);
    task14Array.push(randomNumber);

    if (randomNumber % 2 === 0) {
        evenNumbers.push(randomNumber);
    }
}

console.log(task14Array);
console.log(evenNumbers);

// Задание 15
const task15Array = [];
let sum = 0;

for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    task15Array.push(randomNumber);
    sum += randomNumber;
}

console.log(task15Array);
console.log(sum / task15Array.length);
