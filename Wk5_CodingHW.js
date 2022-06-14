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
    this.periods=[];
    this.selectedPeriod = null;
  }
  
  //Main Menu Options
  start(){
    let selectOption = this.showMainMenu();
    while (selectOption != 0){
        switch(selectOption){
            case '1': this.createPeriod();
            break;
            case '2': this.viewPeriod();
            break;
            case '3': this.deletePeriod();
            break;
            case '4': this.showAllPeriods();
            break;
            default: selectOption =0;
        }
        selectOption = this.showMainMenu();
    }
    alert('Goodbye!');
  }
  
  //this is the Main Menu pop up
  showMainMenu(){
    return prompt (`
    0) Exit
    1) Create period class
    2) View period class
    3) Delete period class
    4) Show all periods
    `);
  }
  
  //Class period menu options
  let periodOptions = this.showPeriodMenu(description);
  switch(periodOptions){
    case '1': this.addStudent();
    break;
    case '2': this.removeStudent();
  }
  
  //this is the period menu pop up
  showPeriodMenu(){
    return prompt (`
    0) Go Back
    1) Add a student
    2) Remove student
    -----------------------
    
    `);
  }



}


