const axios = require('axios');
const fs = require('fs');

// Get the new pinned
export default function updateProjects(filterArr, repoKeys, cb) {
  axios.get("https://api.github.com/users/13uilding/repos")
    .then(function ({data}) {
      let pinnedRepos = data.filter(repo => filterArr.includes(repo.name));
      let mappedRepos = [];
      for (let repo of pinnedRepos) {
        let mappedRepo = {};
        for (let key of repoKeys) {
          mappedRepo[key] = repo[key];
        }
        mappedRepos.push(mappedRepo)
      }
      return cb(mappedRepos)
      // fs.writeFile("./src/github/githubAPI.json", JSON.stringify(mappedRepos, null, 4), (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved');
      // })
    })
}

