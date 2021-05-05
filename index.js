// Getting third party packages
const inquirer = require('inquirer');
const fs = require ('fs');

const init = () => {
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
        // console.log(response)
        // Gets the response on what team members they want
        const memberChoice = response.teamMembers;
        // List of conditions depending on what type of team member they want.
        if(memberChoice !== "Engineer" && memberChoice !== "Intern") {
            console.log("They do not want anymore team members!")
        } else if (memberChoice === "Engineer") {
            console.log("They want an engineer! - run function") 
        } else {
            console.log("They want an intern! - run function")
        }
    })
};

// Starts series of questions
init();
