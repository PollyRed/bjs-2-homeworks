"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;

  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }
  
  return arr; // array
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();

  if(months < 0) {
    months = 0;
  }

  return months;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if(Number.isNaN(Number(percent))) {
    return `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
  }

  if(Number.isNaN(Number(contribution))) {
    return `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
  }

  if(Number.isNaN(Number(amount))) {
    return `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`;
  }

  let S = amount - contribution;
  let P = (percent / 100) / 12;
  let currentDate = new Date();
  let monthsCount = monthDiff(currentDate, date);

  let payment = S * (P + P / (((1 + P)**monthsCount) - 1));

  totalAmount = Number((monthsCount * payment).toFixed(2));

  console.log(totalAmount);

  return totalAmount;
}
