// Primitives: number, string, boolean
// More complex types: arrays, objects
// Fuction types, parameters

// Primitives

let age: number;

age = 12;
// age = '12';

let userName: string | string[];

userName = 'Max';

let isIntructor: boolean;

isIntructor = true;

// More complex

let hobbies: string[];

hobbies = ['Sports', 'Cooking', '12'];

type Person = {
    name: string,
    age: number
};

let person: {
    name: string,
    age: number
};

person = {
    name: 'max',
    age: 32
}

// person =  {
//     isEmployee: true
// };

let people: Person[];

// Type Inference

let course = 'React - The Complete Guide';
// course = 12345;

// Union Type

let courseWithUnionType: string | number = 'React - The Complete Guide';
courseWithUnionType = 12345;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics - It's can understed the type

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, 0);
const stringArray = insertAtBeginning(['1','2','3'], '4');

// updateArray[0].split('');
stringArray[0].split('');

// Class and Interfaces

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first,
        this.lastName = last,
        this.age = age;
        this.courses = courses;
    }

    enRol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice()
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enRol('React');

// student.courses => Angular, React;

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,

    greet() {
        console.log('Hello!');
    },
}

class Instructor implements Human {
    firstName = 'Test';
    age = 0;
    greet() {
        console.log('Olá!');
        
    }
}