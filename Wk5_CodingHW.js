class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

class Period {
  constructor(periodName) {
    this.periodName = periodName;
    this.students = [];
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.students.push(student);
    } else {
      throw new Error(
        `Not a valid instance of student. Argument is not a student: ${student}`
      );
    }
  }
}

class Menu {
  constructor() {
    this.periods = [];
    this.selectedPeriod = null;
  }

  //Main Menu Options function
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
          this.viewAllPeriods();
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

  //this is the Main Menu pop up display
  showMainMenu() {
    return prompt(`
    Main Menu:
    0) Exit
    1) Create Class
    2) View Class Options
    3) Show All Class Periods
    4) Delete Class Period
    `);
  }

  //this is the period menu pop up function display

  // this menu shows the options and the selected class information
  showPeriodMenu(periodInfo) {
    return prompt(`
Class Period Menu Options:
0) Go Back
1) Add Student
2) Remove Student
--------------------------------------------
${periodInfo}
     
    `);
  }

  createPeriod() {
    let periodName = prompt(
      "Enter name for the new class period: (ex: Period 2)"
    );
    this.periods.push(new Period(periodName));
  }
  viewPeriod() {
    let index = prompt("Enter index of period you wish to view:");
    if (index > -1 && index < this.periods.length) {
      this.selectedPeriod = this.periods[index];
      let description = `Class: ${this.selectedPeriod.periodName} \n`;

      for (let i = 0; i < this.selectedPeriod.students.length; i++) {
        description +=
          i +
          ") NAME: " +
          this.selectedPeriod.students[i].name +
          "  GRADE: " +
          this.selectedPeriod.students[i].grade +
          "\n";
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
    this.selectedPeriod.students.push(new Student(name, grade));
  }

  removeStudent() {
    let index = prompt(
      "Enter the index of the student you wish to remove from class period:"
    );

    if (index > -1 && index < this.selectedPeriod.students.length) {
      this.selectedPeriod.students.splice(index, 1);
    }
  }

  viewAllPeriods() {
    let periodString = "";
    for (let i = 0; i < this.periods.length; i++) {
      periodString = `${periodString}${i}) ${this.periods[i].periodName}\n `;
    }

    alert(`
 Viewing All Class Periods:
 ${periodString}
      `);
  }

  deletePeriod() {
    let pdIndex = prompt("Enter number of class period you wish to delete:");
    if (pdIndex === null) {
      alert("Action cancelled...");
      return false;
    } else if (pdIndex > -1 && pdIndex < this.periods.length) {
      this.periods.splice(pdIndex, 1);
      alert("Class has been deleted!");
    } else {
      alert("Not a valid class... delete menu exited.");
    }
  }
}

let menu = new Menu();
menu.start();
