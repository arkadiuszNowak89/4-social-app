import React, { Component } from 'react';
import './LoggedOut.css';
import { API } from '../data/API';

import Posts from '../components/Posts';
import Hello from '../components/Hello';

class LoggedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
    };
  }

  apiHandler = (res) => {
    this.setState({
      apiData: res,
    });
  };

  componentDidMount() {
    const globalAPI = new API('global');
    globalAPI.getData(this.apiHandler);
  }

  render() {
    return (
      <div className='main-cont'>
        <Posts posts={this.state.apiData.data} />
        <Hello />
      </div>
    );
  }
}

export default LoggedOut;
