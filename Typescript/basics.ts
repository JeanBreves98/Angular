// Primites: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 12;

age = 12.1;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// let hobbies: null;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person =  {
    name: string;
    age: number;
};

let person: Person

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12345;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeggining<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeggining(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeggining(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

// Classes 

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student("Jean", "Moutinho Breves dos Santos", 26, ["Angular"]);
student.enrol('React');
// student.courses;
student.listCourses;

// Interfaces

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let jean: Human;

jean = {
    firstName: "Jean",
    age: 26,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log("Hi!!!");
    }
}
