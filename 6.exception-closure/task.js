function parseCount(count) {
  let parseResult = Number.parseInt(count);
  if (isNaN(parseResult)) {
    const parseError = new Error('Невалидное значение');
    throw parseError;
  }
  return parseResult;
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch(error) {
    return error;
  }
}

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    if ((sideOne + sideTwo < sideThree) || (sideOne + sideThree < sideTwo) || (sideTwo + sideThree < sideOne)) {
      const triangleError = new Error('Треугольник с такими сторонами не существует');
      throw triangleError;
    }
  }

  getPerimeter() {
    return this.sideOne + this.sideTwo + this.sideThree;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return Number(Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree)).toFixed(3));
  }
}

function getTriangle(sideOne, sideTwo, sideThree) {
  try {
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch(error) {
    let newTriangle = {
      getArea: function() {
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter: function() {
        return 'Ошибка! Треугольник не существует';
      } 
    };
    
    return newTriangle;
  }
}