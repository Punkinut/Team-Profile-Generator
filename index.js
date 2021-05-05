// Getting third party packages
const inquirer = require('inquirer');
const fs = require ('fs');

const engineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is your engineers's GitHub uersname?",
            name: "engineerUsername"
        },
        {
            type: "list",
            message: "Which type of team memeber would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then((engineerRes) => {
        console.log("Create new class that was imported for engineer")
        console.log(engineerRes)
        // Gets the response on what team members they want
        const engineerChoice = engineerRes.teamMembers;
        // List of conditions depending on what type of team member they want
        if(engineerChoice !== "Engineer" && engineerChoice !== "Intern") {
            console.log("They do not want anymore team members!")
        } else if (engineerChoice === "Engineer") {
            engineer();
        } else {
            intern();
        }
    })
};

const intern = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        },
        {
            type: "list",
            message: "Which type of team memeber would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then((internRes) => {
        console.log("Create new class that was imported for intern")
        console.log(internRes)
        // Gets the response on what team members they want
        const internChoice = internRes.teamMembers;
        // List of conditions depending on what type of team member they want
        if(internChoice !== "Engineer" && internChoice !== "Intern") {
            console.log("They do not want anymore team members!")
        } else if (internChoice === "Engineer") {
            engineer();
        } else {
            intern();
        }
    })
};


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
    .then((managerRes) => {
        console.log("Create new class that was imported for manager")
        console.log(managerRes)
        // Gets the response on what team members they want
        const memberChoice = managerRes.teamMembers;
        // List of conditions depending on what type of team member they want.
        if(memberChoice !== "Engineer" && memberChoice !== "Intern") {
            console.log("They do not want anymore team members!")
        } else if (memberChoice === "Engineer") {
            engineer();
        } else {
            intern();
        }
    })
};

// Starts series of questions
init();
