// Игра "Угадай число"
function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userNumber;

    while (userNumber !== randomNumber) {
        userNumber = Number(prompt('Угадайте число от 1 до 100'));

        if (isNaN(userNumber)) {
            alert('Введите число');
        } else if (userNumber < randomNumber) {
            alert('Загаданное число больше');
        } else if (userNumber > randomNumber) {
            alert('Загаданное число меньше');
        } else {
            alert('Поздравляю! Вы угадали число!');
        }
    }
}

// guessNumberGame();


// Задание 1
function getMinNumber(a, b) {
    return a < b ? a : b;
}

console.log(getMinNumber(8, 4));
console.log(getMinNumber(6, 6));


// Задание 2
function checkEvenNumber(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    }

    return 'Число нечетное';
}

console.log(checkEvenNumber(4));
console.log(checkEvenNumber(7));


// Задание 3
function showSquare(number) {
    console.log(number ** 2);
}

function getSquare(number) {
    return number ** 2;
}

showSquare(5);
console.log(getSquare(6));


// Задание 4
function checkAge() {
    const age = Number(prompt('Сколько вам лет?'));

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

// checkAge();


// Задание 5
function multiplyNumbers(a, b) {
    const firstNumber = Number(a);
    const secondNumber = Number(b);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return 'Одно или оба значения не являются числом';
    }

    return firstNumber * secondNumber;
}

console.log(multiplyNumbers(3, 4));
console.log(multiplyNumbers('5', '6'));
console.log(multiplyNumbers('abc', 2));


// Задание 6
function getCube() {
    const number = Number(prompt('Введите число'));

    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }

    return `${number} в кубе равняется ${number ** 3}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} в кубе равняется ${i ** 3}`);
}

// console.log(getCube());


// Задание 7
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
