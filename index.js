// Getting third party packages
const inquirer = require('inquirer');
const fs = require ('fs');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerPhone"
        },
        {
            type: "list",
            message: "Which type of team memeber would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then((response) => {
        console.log(response)
        
    })