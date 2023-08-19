// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'MIT':
      badge = "https://img.shields.io/badge/license-MIT-green"
      break;
    case 'GNU':
      badge = "https://img.shields.io/badge/license-GNU_GPLv3-green"
      break;
    case 'ISC':
      badge = "https://img.shields.io/badge/license-ISC-green"
      break;
    case 'Apache':
      badge = "https://img.shields.io/badge/license-Apache_2.0-green"
      break;
    default:
      badge = "";
  }
  return badge;
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url;
  switch (license) {
    case 'MIT':
      url = "https://choosealicense.com/licenses/mit/"
      break;
    case 'GNU':
      url = "https://choosealicense.com/licenses/gpl-3.0/"
      break;
    case 'ISC':
      url = "https://choosealicense.com/licenses/isc/"
      break;
    case 'Apache':
      url = "https://choosealicense.com/licenses/apache-2.0/"
      break;
    default:
      url = "";
  }
  return url;
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let selectedLicense;
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);

  switch (license) {
    case 'MIT':
      selectedLicense = "MIT"
      break;
    case 'GNU':
      selectedLicense = "GNU"
      break;
    case 'ISC':
      selectedLicense = "ISC"
      break;
    case 'Apache':
      selectedLicense = "Apache"
      break;
    default:
      selectedLicense = "";
  }

  if (selectedLicense === "") {
    return "";
  } else {
    return `## License

[${selectedLicense}](${licenseLink})
    
## Badges
    
![${selectedLicense}](${licenseBadge})`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const renderedLicense = renderLicenseSection(data.license);
  return `# ${data.title}

## Description

${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)

## Installation

${data.install}

## Usage

${data.usage}

![${data.title}](${data.screenshot})

## Credits

${data.credits}

${renderedLicense}

`;
}

module.exports = generateMarkdown;
