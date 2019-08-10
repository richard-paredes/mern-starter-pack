import React, { Component } from 'react';

import './sampleUsers.css'

class SampleUsers extends Component {
  constructor() {
    super()
    this.state = {
      sampleUsers: []
    }
  }

  componentDidMount() {
    fetch('/api/sampleUsers')
      .then(res => res.json())
      .then(sampleUsers => this.setState({ sampleUsers }, () => console.log(`Users fetched: ${sampleUsers}`)));
  }

  render() {
    const users = this.state.sampleUsers.map((user) => {
      return (
        <li key={user._id}>{user.firstName} {user.lastName} | {user.email} </li>
      )
    }
    )
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

export default SampleUsers;
