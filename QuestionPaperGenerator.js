import fs from 'fs';

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
    
const filterQuestions = (difficulty, count) => {
    const filteredQuestions = questions.filter((question) => {
        return question.difficulty === difficulty;
    });

    const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());

    return shuffledQuestions.slice(0, count);
}
    

const questionPaperGenerator = (requirement) => {

    const totalMarks = requirement.marks;
    const easyPercentage = requirement.easy;
    const mediumPercentage = requirement.medium;
    const hardPercentage = requirement.hard;

    const easyCount = Math.round((easyPercentage / 100) * totalMarks);
    const mediumCount = Math.round((mediumPercentage / 100) * totalMarks);
    const hardCount = Math.round((hardPercentage / 100) * totalMarks);

    const easyQuestions = filterQuestions("Easy", easyCount);
    const mediumQuestions = filterQuestions("Medium", mediumCount);
    const hardQuestions = filterQuestions("Hard", hardCount);

    const questionPaper = easyQuestions.concat(mediumQuestions).concat(hardQuestions);

    return questionPaper;
    
}


export default questionPaperGenerator;