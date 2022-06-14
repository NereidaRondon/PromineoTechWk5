class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  describe() {
    return `${name} has a(n) ${grade} in Math class`;
  }
}

class Period {
  constructor(period) {
    this.periodNum = period;
    this.studentList = [];
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.studentList.push(student);
    } else {
      throw new Error(
        `Not a valid instance of student. Argument is not a student: ${student}`
      );
    }
  }
  describe() {
    return `Period ${this.periodNum} has ${this.studentList.length} students.`;
  }
}

class Menu {
  constructor() {
    this.periods;
  }
}
