'use strict';

// ИНСТРУКЦИЯ
// Убрать все комментарии
// Отформатировать - перед значениями в пикселях должны стоять пробелы

const output = document.getElementById('output');
let result = '';
const btn = document.getElementById('btn');

btn.addEventListener('click', e => {
  e.preventDefault();
  output.textContent = '';
  const input = document.getElementById('textarea').value;
  if (document.getElementById('px-to-vw-1920').checked) {
    convertPxToVw(input, 19.2);
  }
  if (document.getElementById('px-to-vw-1610').checked) {
    convertPxToVw(input, 16.1);
  }
  if (document.getElementById('px-to-vw-1080').checked) {
    convertPxToVw(input, 10.8);
  }
  if (document.getElementById('vw-1920-to-px').checked) {
    convertVwtoPx(input, 19.2);
  }
  if (document.getElementById('vw-1610-to-px').checked) {
    convertVwtoPx(input, 16.1);
  }
  if (document.getElementById('vw-1080-to-px').checked) {
    convertVwtoPx(input, 10.8);
  }
  if (document.getElementById('vw-1920-to-vw-1610').checked) {
    convertVwtoVw(input, 19.2, 16.1);
  }
  if (document.getElementById('vw-1610-to-vw-1920').checked) {
    convertVwtoVw(input, 16.1, 19.2);
  }
});

const convertPxToVw = function (input, viewportWidth) {
  console.log(input, viewportWidth);

  function isNumeric(str) {
    return /^\d+$/.test(str);
  }

  const splitted = input.split('px');

  splitted.forEach(line => {
    if (isNumeric(line.slice(-1))) {
      console.log(`intial line: ${line}`);
      const i = line.lastIndexOf(' ');
      const initialNumber = line.substr(i);
      console.log(`initialNumber: ${initialNumber}`);

      const resultNumber =
        Math.round((+initialNumber / viewportWidth) * 10000) / 10000;
      console.log(`resultNumber: ${resultNumber}`);

      const resultLine = line.slice(0, i).concat(' ', resultNumber, 'vw');
      console.log(`final line: ${resultLine}`);

      result += resultLine;
    } else {
      result += line;
    }
  });

  console.log(result);

  output.textContent = result;
};

const convertVwtoPx = function (input, viewportWidth) {
  console.log(input, viewportWidth);

  function isNumeric(str) {
    return /^\d+$/.test(str);
  }

  const splitted = input.split('vw');

  splitted.forEach(line => {
    if (isNumeric(line.slice(-1))) {
      console.log(`intial line: ${line}`);
      const i = line.lastIndexOf(' ');
      const initialNumber = line.substr(i);
      console.log(`initialNumber: ${initialNumber}`);

      const resultNumber = Math.round(+initialNumber * viewportWidth);
      console.log(`resultNumber: ${resultNumber}`);

      const resultLine = line.slice(0, i).concat(' ', resultNumber, 'px');
      console.log(`final line: ${resultLine}`);

      result += resultLine;
    } else {
      result += line;
    }
  });

  console.log(result);

  output.textContent = result;
};

const convertVwtoVw = function (input, viewportWidthFrom, viewportWidthTo) {
  console.log(input, viewportWidthFrom);

  function isNumeric(str) {
    return /^\d+$/.test(str);
  }

  const splitted = input.split('vw');

  splitted.forEach(line => {
    if (isNumeric(line.slice(-1))) {
      console.log(`intial line: ${line}`);
      const i = line.lastIndexOf(' ');
      const initialNumber = line.substr(i);
      console.log(`initialNumber: ${initialNumber}`);

      const resultNumber =
        Math.round(
          ((+initialNumber * viewportWidthFrom) / viewportWidthTo) * 10000
        ) / 10000;
      console.log(`resultNumber: ${resultNumber}`);

      const resultLine = line.slice(0, i).concat(' ', resultNumber, 'vw');
      console.log(`final line: ${resultLine}`);

      result += resultLine;
    } else {
      result += line;
    }
  });

  console.log(result);

  output.textContent = result;
};
