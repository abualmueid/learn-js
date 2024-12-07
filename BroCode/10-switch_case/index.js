let score = 85;
let grade;

switch(true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'A-';
        break;  
    case score >= 70:
        grade = 'B';
        break;
    case score >= 60:f
        grade = 'B-';
        break; 
    case score >= 50:
        grade = 'C';
        break;
    case score >= 40:
        grade = 'C-';
        break;  
    default: 
        grade = 'F';
}

console.log(`Your grade is ${grade}.`);