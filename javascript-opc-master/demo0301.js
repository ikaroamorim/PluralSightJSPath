function Person( firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Person.prototype.age = 29;

  display(Person.prototype)

  let jim = new Person('Jim', 'Cooper')
  let sophia = new Person('Sophia', 'Cooper')

  sophia.__proto__.age = 19

  display(jim.__proto__)
  display(sophia.__proto__)

  display(Person.prototype === jim.__proto__)

  jim.age=32
  display(jim.age)
  display(jim.__proto__.age)

  display(sophia.hasOwnProperty('age'));
  display(sophia.age)