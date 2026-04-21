require('dotenv').config();

const { program } = require('commander');
const { getWeatherData } = require('./api/weatherApi');
const { getGitHubUser } = require('./api/githubApi');
const { saveToFile, generateReport } = require('./utils/fileHandler');
const { validateInputs } = require('./utils/validator');

program
  .requiredOption('--city <name>', 'City name for weather search')
  .requiredOption('--user <username>', 'GitHub username')
  .option('--save', 'Save output to files');

program.parse(process.argv);

const options = program.opts();

async function main() {
  try {
    validateInputs(options);

    console.log('\nFetching weather data...');
    const weather = await getWeatherData(options.city);

    console.log('Fetching GitHub user data...');
    const githubUser = await getGitHubUser(options.user);

    const finalData = {
      city: options.city,
      weather,
      githubUser
    };

    console.log('\n===== RESULTS =====');
    console.log(finalData);

    if (options.save) {
      saveToFile(finalData);
      generateReport(finalData);
      console.log('\nFiles saved successfully inside output folder.');
    }

  } catch (error) {
    console.error('\nERROR:', error.message);
  }
}

main();