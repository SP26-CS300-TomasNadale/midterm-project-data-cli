const axios = require('axios');

async function getGitHubUser(username) {
  try {
    const url = `https://api.github.com/users/${username}`;

    const response = await axios.get(url);

    return {
      username: response.data.login,
      publicRepos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following
    };

  } catch (error) {
    throw new Error('Failed to fetch GitHub user data');
  }
}

module.exports = { getGitHubUser };