// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// an array of questions for user input
const questions = [ {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Provide a short description of your project?',
    name: 'desc',
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'install',
},
{
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Provide the path to a screenshot (ex. "assets/images/screenshot.png").',
    name: 'screenshot',
},
{
    type: 'input',
    message: 'List your collaborators.',
    name: 'credits',
},
{
  type: 'list',
  message: 'Please select a license.',
  name: 'license',
  choices: ['None', 'MIT', 'GNU', 'ISC', 'Apache']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let dir = './output';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFile(`./output/${fileName}`, data, (err) =>
        err ? console.log(err) : console.log('README.md successfully generated!')
        );
}

// a function to initialize app
function init() {
    console.log(`Welcome to the README.md Generator!
Please answer each of the following prompts to have a professional README.md generated for your project.`);
    inquirer
    .prompt(questions)
    .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
