const fs = require('fs');
const path = require('path');

function saveToFile(data) {
  const filePath = path.join(__dirname, '../../output/data.json');

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2),
    'utf-8'
  );
}

function generateReport(data) {
  const reportPath = path.join(__dirname, '../../output/report.txt');

  const report = `
===== PROJECT REPORT =====

City: ${data.city}

Weather Information:
Temperature: ${data.weather.temperature}°C
Condition: ${data.weather.weather}
Humidity: ${data.weather.humidity}%

GitHub User Information:
Username: ${data.githubUser.username}
Public Repositories: ${data.githubUser.publicRepos}
Followers: ${data.githubUser.followers}
Following: ${data.githubUser.following}
`;

  fs.writeFileSync(reportPath, report, 'utf-8');
}

module.exports = {
  saveToFile,
  generateReport
};