// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {

    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Test
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const freddy = new Student({
    name: 'Freddy',
    location: 'Bedraock',
    age: 37,
    previousBackground: "None",
    className: "Web23FT",
    favSubjects: ["JS", "MAth"]
  });

  const fredrick = new ProjectManager({
    name: 'Fredrick',
    location: 'Bedasdasdasdasdrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget to`,
    gradClassName: "idk",
    favInstructor: "idk"
  });

  fred.demo("Math");
  fred.grade(freddy, "Math");

  freddy.listSubjects();
  freddy.prAssignment("Math");
  freddy.sprintChallenge("Math");

  fredrick.standUp("CoolSlackChannel");
  fredrick.debugsCode(freddy, "Math");