// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
