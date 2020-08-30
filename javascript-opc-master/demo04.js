//Class só ES6

class Person{
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName(){
      return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
      let nameParts = value.split(' ');
      this.firstName = nameParts[0]
      this.lastName = nameParts[1]
    }

    isAdult(){
      return this.age>=18;
    }
  }

  class Student extends Person{
    constructor(firstName, lastName, age){
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    static fromPerson(person){
      return new Student(person.firstName, person.lastName, person.age)
    }

    enroll(courseId){
      this._enrolledCourses.push(courseId)
    }

    getCourses(){
      return `${this.fullName}'s enrolled courses are: ${this._enrolledCourses.join(', ')}.`
    }
  }

  Object.defineProperty(Person.prototype, 'fullName', {enumerable: true})

  

  let jim = new Student('Jim', 'Cooper', 29)
  jim.enroll('CS205');
  jim.enroll('MA101');
  jim.enroll('CS50');
  

  display(jim)
  display(jim.getCourses())

  let tim = new Person('Tim', 'Cook', 59)

  let timStudent = Student.fromPerson(tim);

  display(timStudent)
  display(timStudent.getCourses())
