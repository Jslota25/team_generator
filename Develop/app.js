const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];


function getInfo() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
        }
    ])
}

const createTeam = () => {
    inquirer
    .prompt ([
        {
            type: "list",
            name: "team",
            choices: [
                "Build Team",
                "Finish Team"
            ]
        }
    ])

    .then((response) => {
        const buildTeam = response.newTeam;
        switch (buildTeam) {
            case "Build Tteam":
                inquirer
                .prompt(questions)
                .then((choices) => {
                    if(choices === "Intern") {
                        inquirer
                        .prompt ( {
                            type: "input",
                            name: "school",
                            message: "Where did you go to school?"
                        })
                        .then((ans) => {
                            let intern = new Intern(
                                choices.name, choices.id, choices.email, ans.school);
                            team.push(intern);
                        });
                    }
                
            }) 

    break;

case "Finish Team":
        console.log(team);
        if (team.length > 0) {
        console.log("Complete");
        writeHTML(render(team));
        } else {
        console.log("No employees");
        }

        break;
    default:
        break;
        
        }
    })
}

getInfo();