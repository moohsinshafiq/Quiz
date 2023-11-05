// Importing required modules
import inquirer from 'inquirer';
// The main function of the app
async function main() {
    // Define the quiz
    const quiz = [
        {
            question: 'What is the capital of Pakistan?',
            choices: ['Karachi', 'Islamabad', 'Lahore'],
            answer: 'Islamabad'
        },
        {
            question: 'How much province are there in Pakistan?',
            choices: ['1', '2', '3', '4'],
            answer: '4'
        },
        // Add more questions as needed
    ];
    let score = 0;
    for (const question of quiz) {
        // Ask the question
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question.question,
                choices: question.choices,
            },
        ]);
        // Check the answer
        if (answers.answer === question.answer) {
            score++;
        }
    }
    // Show the result
    console.log(`You scored ${score} out of ${quiz.length}!`);
}
// Run the app
main();
