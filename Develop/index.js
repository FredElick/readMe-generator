// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
   type:'input',
   name:  'name',
   message: 'What is the name of your project?'
},
{
 type: 'input',
 name: 'description',
 message: 'Please type a brief description of the project.'
},
{
    type: 'input',
    name: 'install',
    message: 'please describe how to install your project.'
},
{
    type: 'input',
    name: 'usage',
    message: 'Please describe how the project is used.'
},
{
    type: 'input',
    name: 'test',
    message: 'Please describe how a user can test if the program is working or list some test inputs'
},
{
    type: 'input',
    name: 'contribute',
    message: 'Please explain guidelines for contributing '
},
{
type: 'input',
name: 'github',
message: 'Please input your github username.'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'questions',
    message: 'Please include any additional info or instructions should you want to be contacted for questions.'
},
{
    type: 'list',
    name: 'license',
    message: 'Please select any Licenses used for the project',
    choices: ['APM', 'AUR', 'Bower', 'cocoapods', 'Conda', 'cpan', 'Cran', 'crate', 'Ctan', 'Dub', 'Eclipse', 'Github', 'Hexpm', 'NPM', 'Ore', 'Packagist', 'PyPI', 'Weblate']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
          if (err) throw new Error(err);
         });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( data => {
        const pageMD= generateMarkdown(data);
        writeToFile('README.md', pageMD)
    })

}

// Function call to initialize app
init();

