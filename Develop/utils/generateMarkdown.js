// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return 'https://img.shields.io/badge/License-'+license+'-green';;
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){

    return `![License badge](${license})`;
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return`
    ## License
    Licensed under the ${license} license.`;
  }
  else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license= renderLicenseBadge(data.license);
  var licenseMd = renderLicenseLink(license);
  return `
  ## ${data.name}

  ## Description
  
  ${data.description}


  ${licenseMd}
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  This program is licensed under ${data.license}
  

  ## Contribute

  If you would like to contribute to this project:
  ${data.contribute}

  ## Tests
  To test the program try the following steps and test data:
  ${data.test}
  ## Questions
  ${data.questions}
  email address: ${data.email}

  [${data.github}'s gitub page](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
