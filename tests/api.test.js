const axios = require('axios');
const { getGitHubUser } = require('../src/api/githubApi');

jest.mock('axios');

describe('GitHub API Tests', () => {

  test('should fetch GitHub user successfully', async () => {
    axios.get.mockResolvedValue({
      data: {
        login: 'torvalds',
        public_repos: 10,
        followers: 100,
        following: 5
      }
    });

    const result = await getGitHubUser('torvalds');

    expect(result.username).toBe('torvalds');
    expect(result.publicRepos).toBe(10);
  });

  test('should throw error when API fails', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));

    await expect(
      getGitHubUser('wronguser')
    ).rejects.toThrow('Failed to fetch GitHub user data');
  });

});