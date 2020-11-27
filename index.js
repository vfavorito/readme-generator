const inquirer = require("inquirer");
const fs = require("fs");

const getInfo = () => 
    inquirer.prompt([
        {
            type:"input",
            name:"RepoTitle",
            message:"What is the title of this repository?"
        },
        {
            type:"input",
            name:"AppDesc",
            message:"What does this app do?"
        },
        {
            type:"input",
            name:"Usage",
            message:"How do you use the app?"
        },
        {
            type:"list",
            name:"PicCount",
            message:"How many screenshots are you adding In your Usage Section?",
            choices:["1","2","3","4","5"]
        },
        {
            type:"input",
            name:"Installation",
            message:"How do you install this app?",
        },
        {
            type:"list",
            name:"Contribution",
            message:"Will you be using the contribution covenant or writing your own guidelines?",
            choices:["Contribution Covenant", "Write My Own"]
        },
        {
            type:"input",
            name:"test",
            message:"What is your test for this app?"
        },
        {
            type:"list",
            name:"License",
            message:"What license will this app be covered under?",
            choices:["MIT", "GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Apache 2.0", "The Unlicense" ]
        },
        {
            type:"input",
            name:"githubName",
            message:"What is your Github Username?"
        },
        {
            type:"input",
            name:"emailAddress",
            message:"what is your email address?"
        }
    ])
getInfo();