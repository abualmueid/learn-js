date = new Date();
console.log(date);

date = new Date(0);
console.log(date);

date = new Date(2025, 3, 23, 22, 28, 25);
console.log(date);

date = new Date();

year = date.getFullYear();
month = date.getMonth();
day = date.getDate();
hour = date.getHours();
minute = date.getMinutes();
second = date.getSeconds();
dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(dayOfWeek);

date = new Date();

date.setFullYear(2026);
date.setMonth(0);
date.setDate(10);
date.setHours(6);
date.setMinutes(10);
date.setSeconds(5);

console.log(date);