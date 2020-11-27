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
If you would like to contribute to the development of this app the guidelines for doing so can be found here: 


### License
Copyright <2020> < Vincent Favorito >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
const writeReadme = async () => {
    console.log("Lets Create A Top-Notch Readme File!");
    try{
        const responses = await getInfo();
        insertPics(responses);
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