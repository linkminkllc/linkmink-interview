'use strict';

const e = React.createElement;

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    // Get data here
  }

  render() {
    let user_list;
    // Your code here

    return e(
      'ul',
      null,
      user_list
    );
  }
}

const domContainer = document.querySelector('#users_list');ReactDOM.render(e(UsersList), domContainer);
