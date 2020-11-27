const inquirer = require("inquirer");
const fs = require("fs");
const pictures = "";
const contribution ="";

const getInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "RepoTitle",
            message: "What is the title of this repository?"
        },
        {
            type: "input",
            name: "AppDescription",
            message: "What does this app do?"
        },
        {
            type: "input",
            name: "Usage",
            message: "How do you use the app?"
        },
        {
            type: "list",
            name: "PicCount",
            message: "How many screenshots are you adding In your Usage Section?",
            choices: ["1", "2", "3", "4", "5"]
        },
        {
            type: "input",
            name: "AppLink",
            message: "Where does this app live?",
        },
        {
            type: "input",
            name: "Installation",
            message: "How do you install this app?",
        },
        {
            type: "list",
            name: "Contribution",
            message: "Will you be using the contribution covenant or writing your own guidelines?",
            choices: ["Contribution Covenant", "Write My Own"]
        },
        {
            type: "input",
            name: "Test",
            message: "What is your test for this app?"
        },
        {
            type: "list",
            name: "License",
            message: "What license will this app be covered under?",
            choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Apache 2.0", "The Unlicense"]
        },
        {
            type: "input",
            name: "GithubName",
            message: "What is your Github Username?"
        },
        {
            type: "input",
            name: "EmailAddress",
            message: "what is your email address?"
        }
    ]);

const insertPics = (responses) => {
    for (i = 0; i < parseInt(responses.PicCount); i++) {
        const picInsertion = "## PicDesc.\/n ![picAlt](picPath)\/n";
        pictures += picInsertion;
    }
}
const contribution = (responses) => {
    if(responses.Contribution === "Contribution Covenant"){
        contribution = "the guidelines for doing so can be found here:[${Contribution Covenant}](${https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.txt})";
    }
    else{
        contribution = "here are the guidelines for doing so: \/n responses.Contribution";
    }
}


const generateReadme = (responses) =>
`# ${responses.RepoTitle}

### Overview:
${responses.AppDescription}  

## How it works!
${responses.Usage}

${pictures}

### Example
Here is a link to the ${responses.RepoTitle}:  [${responses.AppLink}](${responses.AppLink})

### Installation
${responses.Installation}

### Contributing
If you would like to contribute to the development of this app ${contribution}


### License


`
const writeReadme = async () => {
    console.log("Lets Create A Top-Notch Readme File!");
    try{
        const responses = await getInfo();
        insertPics(responses);
        contribution(responses);
        const readMe = generateReadme(responses);
        await writeFileAsync("README.md", readMe);
        console.log("It is done my master");
    }
    catch(error){
        console.log("I have failed you master");
        console.log(error);
    }
}
writeReadme();