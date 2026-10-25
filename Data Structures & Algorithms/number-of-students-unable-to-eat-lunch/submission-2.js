class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let studentsDidntEat = 0;

        while (studentsDidntEat < students.length) {
            if (sandwiches[0] === students[0]) {
                sandwiches.shift();
                students.shift();
                studentsDidntEat = 0;
            } else {
                students.push(students.shift());
                studentsDidntEat++;
            }
        }

        return students.length;
    }
}