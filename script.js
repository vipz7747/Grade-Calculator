function calculateGrade() {
    let marks = parseInt(document.getElementById('marks').value);
    let resultDiv = document.getElementById('result');
    let grade = '';
    let status = '';

    if (isNaN(marks) || marks < 0 || marks > 100) {
        resultDiv.innerHTML = "Please enter a valid mark between 0 and 100.";
        resultDiv.className = 'result fail';
        return;
    }

    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B+';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C+';
    } else if (marks >= 40) {
        grade = 'C';
    } else if (marks >= 30) {
        grade = 'D+';
    } else if (marks >= 20) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    if (marks >= 30) {
        status = 'Pass';
        resultDiv.className = 'result pass';
    } else {
        status = 'Fail';
        resultDiv.className = 'result fail';
    }

    resultDiv.innerHTML = `Grade: ${grade} <br> Status: ${status}`;
}