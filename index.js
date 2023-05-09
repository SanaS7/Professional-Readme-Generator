const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type:'input',
        name: 'file-name',
        message:'What name would you like to save this file with'
    }
]).then((responses) => {
    
    const fs = require('fs');
    const { licenseBadge, licenseLink } = require('./utils/license');

    const readmeContent = `
# ${responses.title}

## Description
${responses.description}

## Table of Contents
        - [Installation]
        - [Usage]
        - [License]
        - [Contributing]
        - [Tests]
        - [Questions]

## Installation
${responses.installation}

## Usage
${responses.usage}

## License
${licenseBadge(responses.license)}  
This project is covered under the ${licenseLink(responses.license)} license.

## Contributing
${responses.contributing}

## Tests
${responses.tests}

## Questions
If you have any questions, please feel free to reach out to me at ${responses.email}. You can also check out my GitHub profile at https://github.com/${responses.github}.
    `;

    fs.writeFileSync(`${responses['file-name']}.md`, readmeContent);
});
