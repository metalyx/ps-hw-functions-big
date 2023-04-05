// 1
const greetCustomer = (name) => {
    console.log(`Welcome to the store ${name}`)
}

// 2
const logPositiveOrNegative = (num) => {
    if (num === 0) {
        console.log(`Num is 0`);
    } else if (num > 0) {
        console.log(`Num is positive`);
    } else if (num < 0) {
        console.log(`Num is negative`);
    }
}

// 3
const returnIsPositive = (num) => {
    return num >= 0 ? true : false;
}

// 4 
const returnIsTooShort = (password) => {
    return password.length < 8 ? true : false;
}

// 5
const returnIsBreakingLaw = (age, drink) => {
    if (age >= 21 && drink === 'alcohol') {
        return true;
    }
}

// 6
let count = 0;
const addToCount = (num) => {
    count += num;
}

addToCount(12)
addToCount(-2)
addToCount(2)
addToCount(5)

// 7
const returnIsChase = (name) => {
    return name.toLowerCase() === 'chase' ? true : false;
}

// 8 

// class is reserved name in JavaScript, so we can't use it for naming variables
const clas = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];

const returnClassIsTooSmall = (students) => {
    return students.length < 10 ? true : false;
}

returnClassIsTooSmall(clas);

const combineStrings = (str1, str2) => {
    return str1 + str2;
} 

combineStrings('sfs', 'sa')
combineStrings('12', '11')
combineStrings('2', '  ')

const returnDataType = (data) => {
    return typeof data;
}

const addStudentToClass = (student) => {
    clas.push(student);
}

addStudentToClass('Jake')
addStudentToClass('Madina')

const extraStudents = [
    'Sam',
    'Jane',
    'Mike',
    'John',
    'Vitalii',
    'Madina',
    'Bryan',
    'Tri',
    'Aden',
    'Jenifer'
];

const fillClass = () => {
    while (clas.length < 15) {
        clas.push(extraStudents[extraStudents.length - 1]);
        extraStudents.pop();
    }
}

fillClass();
