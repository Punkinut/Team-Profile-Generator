// Getting third party packages
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const genusers = require('./src/genusers');
const createHtml = require('./src/template');

// Arrays that collects team memebers and id lists
let team = [];
let idList = [];

// Function that runs the prompts related to the engineer
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
                if(idList.indexOf(input) > -1) {
                    return 'ID already exists'
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engineerEmail",
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
        const engineerChoice = engineerRes.teamMembers;
        const { engineerName, engineerId, engineerEmail, engineerUsername} = engineerRes;
        let engineerP = new Engineer (engineerName, engineerId, engineerEmail, engineerUsername);
        team.push(engineerP);
        idList.push(engineerId);
        if (engineerChoice === "Engineer") {
            engineer();
        } else if (engineerChoice === "Intern"){
            intern();
        } else {
            generateHtml(render(team));
        }
    })
};

// Function that runs the prompts related to the intern
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
                if(idList.indexOf(input) > -1) {
                    return 'ID already exists'
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
        const internChoice = internRes.teamMembers;
        const { internName, internId, internEmail, internSchool } = internRes;
        let internP = new Intern (internName, internId, internEmail, internSchool);
        team.push(internP);
        idList.push(internId);
        if (internChoice === "Engineer") {
            engineer();
        } else if (internChoice === "Intern"){
            intern();
        } else {
            generateHtml(render(team));
        }
    })
};

// Function that runs the prompts related to the manager
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
        const memberChoice = managerRes.teamMembers;
        const { managerName, managerId, managerEmail, managerPhone } = managerRes;
        let manager = new Manager(managerName, managerId, managerEmail, managerPhone);
        team.push(manager);
        idList.push(managerId);
        if (memberChoice === "Engineer") {
            engineer();
        } else if (memberChoice === "Intern"){
            intern();
        } else {
            generateHtml(render(team));
        }
    })
};

// Starts series of questions
init();

// Render function that takes all the team members and filters them into one large variable of html
const render = (team) => {
    let managerFromTeam = team.filter(employee => employee.getRole() === 'Manager');
    let engineerFromTeam = team.filter(employee => employee.getRole() === 'Engineer');
    let internFromTeam = team.filter(employee => employee.getRole() === 'Intern');

    let combineHtml = '';
    
    if (managerFromTeam.join('') !== '') {
        combineHtml = combineHtml + genusers.generateManager(managerFromTeam)
    }

    engineerFromTeam.forEach(elementEng => {
        if (engineerFromTeam.join('') !== '') {
            combineHtml = combineHtml + genusers.generateEngineer(elementEng)
        }
    });
    
    internFromTeam.forEach(elementInt => {
        if (internFromTeam.join('') !== '') {
            combineHtml = combineHtml + genusers.generateIntern(elementInt)
        }
    })

    return combineHtml;
    
}

// This passes all the gathered html into a template the creates the final file
const generateHtml = inp => {
    createHtml(inp);
}
