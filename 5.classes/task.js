class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null; 
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find((book) => book[type] === value);
    
    if (result === undefined) {
      return null;
    }

    return result;
  }

  giveBookByName(bookName) {
    let result = this.books.find((book) => book.name === bookName);
    
    if (result === undefined) {
      return null;
    }
    let resultIndex = this.books.indexOf(result);
    this.books.splice(resultIndex, 1);
    
    return result;
  }
}

class Student {
  constructor(name, gender, age) { 
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }
  
  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
    } else {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [];
      } 
      this.marks[subject].push(mark);     
    }
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      console.log('Несуществующий предмет');
    } else {
      let sum = 0;
      for (let mark of this.marks[subject]) {
        sum += mark;
      }
      return sum / this.marks[subject].length;
    }
  }

  getAverage() {
    let sum = 0;
    let marksCount = 0;
    for (let subject in this.marks) {
      for (let mark of this.marks[subject]) {
        sum += mark;
      }
      marksCount += this.marks[subject].length;
    }
    return sum / marksCount;
  }
}