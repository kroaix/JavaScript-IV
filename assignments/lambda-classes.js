// CODE here for your Lambda Classes
class Person{
  constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
};

class Instructor extends Person{
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`;
  }
};

class Student extends Person{
  constructor(studentAttributes){
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach(function(favSubj){
      console.log(favSubj);
    });
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
};

class ProjectManager extends Instructor{
  constructor(pmAttributes){
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standup time!`;
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
};

const linda = new Instructor({
  name: 'Linda',
  age: 50,
  location: 'Norwich, Connecticut',
  favLanguage: 'JavaScript',
  specialty: 'Back-End',
  catchPhrase: 'A computer program does what you tell it to do, not what you want it to do'
});

const katrina = new Student({
  name: 'Katrina',
  age: 27,
  location: 'Uncasville, CT',
  previousBackground: 'Full Sail University',
  className: 'WebPT7',
  favSubjects: ['JavaScript', 'Less']
});

const james = new ProjectManager({
  name: 'James',
  age: 26,
  location: 'Washington, DC',
  gradClassName: 'Web1',
  favInstructor: 'Ryan'
});


console.log(linda.demo('JavaScript'));
console.log(linda.grade(katrina, katrina.favSubjects[1]));
console.log(linda.speak());
console.log(katrina.speak());
console.log(james.speak());
console.log(katrina.PRAssignment(katrina.favSubjects[0]));
console.log(katrina.sprintChallenge(katrina.favSubjects[0]));
katrina.listsSubjects();
console.log(james.standUp('Web 2'));
console.log(james.debugsCode(katrina, katrina.favSubjects[0]));