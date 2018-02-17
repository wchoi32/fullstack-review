import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {console.log(props.repos)}
    <ul>
      {props.repos.map((repo) => 
          <div> {repo.repoName + ': ' + repo.htmlUrl + ': ' + repo.updatedAt } </div>
      )}
    </ul>
  </div>
)

export default RepoList;