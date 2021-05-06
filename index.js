// Getting third party packages
const inquirer = require('inquirer');
const fs = require ('fs');
const Manager = require('./lib/manager');

const engineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engineerId",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your engineers's GitHub uersname?",
            name: "engineerUsername",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "list",
            message: "Which type of team memeber would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then((engineerRes) => {
        // Gets the response on what team members they want
        const engineerChoice = engineerRes.teamMembers;
        // List of conditions depending on what type of team member they want
        if (engineerChoice === "Engineer") {
            engineer();
        } else if (engineerChoice === "Intern"){
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
            name: "internName",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "list",
            message: "Which type of team memeber would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then((internRes) => {
        // Gets the response on what team members they want
        const internChoice = internRes.teamMembers;
        // List of conditions depending on what type of team member they want
        if (internChoice === "Engineer") {
            engineer();
        } else if (internChoice === "Intern"){
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
            name: "managerName",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerId",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "managerEmail",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerPhone",
            validate: async (input) => {
                if(input.trim(' ') === '') {
                    return 'Please put in an answer'
                }
                return true;
            }
        },
        {
            type: "list",
            message: "Which type of team memeber would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then((managerRes) => {
        // Object destruction to get each element
        const { managerName, managerId, managerEmail, managerPhone } = managerRes;
        
        // Gets the response on what team members they want
        const memberChoice = managerRes.teamMembers;
        // List of conditions depending on what type of team member they want.
        if (memberChoice === "Engineer") {
            engineer();
        } else if (memberChoice === "Intern"){
            intern();
        }
    })
};

// Starts series of questions
init();
