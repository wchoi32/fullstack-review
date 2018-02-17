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
    let hello;
    // TODO
    $.ajax({
      url: '/repos',
      type: 'POST',
      contentType: 'text/plain', 
      data: term,
      success: function(data) {
        console.log('sent');
      },
      error: function(err) {
        console.log('Failed to Send', err)
      }
    });

    $.ajax({
      url: '/repos',
      type: 'GET',
      contentType: 'application/json', 
      success: (receivedData) => { 
        var received = JSON.parse(receivedData)
        // console.log(typeof received);
        this.setState({
          repos: received
        })
      },
      error: function(err) {
        console.log('Failed to Fetch', err)
      }
    });
  }

  // processData(data) {
  //   this.setState({
  //     repos: data;
  //   })
  // }

  // fetch () {
  //   $.ajax({
  //     url: '/repos',
  //     type: 'GET',
  //     contentType: 'application/json', 
  //     success: function(receivedData) {
  //       console.log(receivedData)
  //       // this.setState({
  //       //   data: receivedData
  //       // });
  //     },
  //     error: function(err) {
  //       console.log('Failed to Fetch', err)
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
