import {PI, getCircumference, getArea} from './mathUtil.js';

// const PI = PI;

console.log(PI);

const circumference = getCircumference(10);
console.log(`Circumference: ${circumference.toFixed(2)}`);
const area = getArea(10); 
console.log(`Area: ${area.toFixed(2)}`);
// console.log(`Circumference: ${getCircumference(10).toFixed(2)}`);