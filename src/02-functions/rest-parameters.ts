// Rest Parameters

// 1. Multiple numbers
function restAddNumbers(...numbers: number[]): number {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(restAddNumbers(10, 20));
console.log(restAddNumbers(10, 20, 30));
console.log(restAddNumbers(1, 2, 3, 4, 5));

// 2. Rest strings
function restJoinNames(...names: string[]): string {
    return names.join(", ");
}

console.log(restJoinNames("Aman", "Rahul", "Mohit"));

// 3. First parameter + rest parameters
function restStudentScores(
    studentName: string,
    ...scores: number[]
): void {
    console.log(`Student: ${studentName}`);
    console.log(`Scores: ${scores.join(", ")}`);
}

restStudentScores("Aman", 80, 90, 95);