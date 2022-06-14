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
  constructor(periodNum) {
    this.periodNum = periodNum;
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
    this.periods = [];
    this.selectedPeriod = null;
  }

  //Main Menu Options
  start() {
    let selectOption = this.showMainMenu();
    while (selectOption != 0) {
      switch (selectOption) {
        case "1":
          this.createPeriod();
          break;
        case "2":
          this.viewPeriod();
          break;
        case "3":
          this.showAllPeriods();
          break;
        case "4":
          this.deletePeriod();
          break;
        default:
          selectOption = 0;
      }
      selectOption = this.showMainMenu();
    }
    alert("You have exited successfully, goodbye!");
  }

  //this is the Main Menu pop up
  showMainMenu() {
    return prompt(`
    Main Menu:
    0) Exit
    1) Create period class
    2) View period class
    3) Show all periods
    4) Delete period class
    `);
  }

  createPeriod() {
    let periodName = prompt("Enter number for the new period class:");
    this.periods.push(new Period(periodNum));
  }
  viewPeriod() {
    let index = prompt("Enter number of period you wish to view:");
    if (index > -1 && index < this.periods.length) {
      this.selectedPeriod = this.periods[index];
      let description = "Class Period: " + this.selectedPeriod.periodNum + "\n";

      for (let i = 0; i < this.selectedPeriod.periods.length; i++) {
        description += i + ")" + this.selectedPeriod.periods[i].position + "\n";
      }

      //Class period menu options
      let periodOptions = this.showPeriodMenu(description);
      switch (periodOptions) {
        case "1":
          this.addStudent();
          break;
        case "2":
          this.removeStudent();
      }
    }
  }
  addStudent() {
    let name = prompt("Name of new student:");
    let grade = prompt("Enter math grade:");
    this.selectedPeriod.periods.push(new Student(name, grade));
  }

  removeStudent() {
    let index = prompt(
      "Enter the index of the student you wish to remove from class period:"
    );

    if (index > -1 && index < this.selectedPeriod.periods.length) {
      this.selectedPeriod.periods.splice(index, 1);
    }
  }

  showAllPeriods() {
    let periodString = "";
    for (let i = 0; i < this.periods.length; i++) {
      periodString += i + ")" + this.periods[i].name + "\n";
    }
    alert(periodString);
  }

  deletePeriod() {
    let index = prompt("Enter number of period you wish to delete:");
    if (index > -1 && index < this.periods.length) {
      this.periods.splice(index, 1);
    }
  }

  //this is the period menu pop up
  showPeriodMenu(periodInfo) {
    return prompt(`
      Student Menu:
      0) Go Back
      1) Add a student
      2) Remove student
      -----------------------
      ${periodInfo}
      `);
  }
}

let menu = new Menu();
menu.start();
