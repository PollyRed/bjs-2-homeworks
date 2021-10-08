function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

const student1 = new Student("Вася Иванов", "мужской", 19);
const student2 = new Student("Лена Петрова", "женский", 20);
const student3 = new Student("Игорь Смирнов", "мужской", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.a = function () {
  console.log(this.name, this.age);
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) { 
    this.marks = [];
    this.marks.push(mark);
  } else {
      this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...newMarks) {
  if(this.marks === undefined) { 
    this.marks = [];
    for (let newMark of newMarks) {
      this.marks.push(newMark);
    }
  } else {
    for (let newMark of newMarks) {
      this.marks.push(newMark);
    }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}