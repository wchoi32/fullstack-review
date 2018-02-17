import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: '/repos',
      type: 'POST',
      contentType: 'text/plain', 
      data: term,
      success: function(data) {
        console.log('sent')
      },
      error: function(err) {
        console.log('Failed to Send', err)
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// getYouTubeVideos(query) {
//   var options = {
//     key: this.props.API_KEY,
//     query: query
//   };

//   this.props.searchYouTube(options, (videos) =>
//     this.setState({
//       videos: videos,
//       currentVideo: videos[0]
//     })
//   );
// }
