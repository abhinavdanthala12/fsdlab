function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    this.study = function() {
        console.log(`${this.name} is studying.`);
    };

    this.getGrade = function() {
        return this.grade;
    };
}

const student1 = new Student("Abhinav", "A");
const student2 = new Student("abhi", "S");
const student3 = new Student("abbinay", "A+");

student1.study();
console.log(`${student1.name}'s grade:${student1.getGrade()}`);

student2.study();
console.log(`${student2.name}'s grade:${student2.getGrade()}`);

student3.study();
console.log(`${student3.name}'s grade:${student3.getGrade()}`);
