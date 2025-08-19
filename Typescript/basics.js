// Primites: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age = 12;
age = 12.1;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// let hobbies: null;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// person = {
//     isEmployee: true
// };
var people;
// Type inference
var course = 'React - The Complete Guide';
course = 12345;
// Functions & types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeggining(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeggining(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeggining(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');
// Classes 
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student("Jean", "Moutinho Breves dos Santos", 26, ["Angular"]);
student.enrol('React');
// student.courses;
student.listCourses;
var jean;
jean = {
    firstName: "Jean",
    age: 26,
    greet: function () {
        console.log('Hello!');
    },
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log("Hi!!!");
    };
    return Instructor;
}());
