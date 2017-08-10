import React from 'react';
import {Link} from 'react-router-dom';

export default class BaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav>
          <div className='background1'>
            <div className='background2'>
              <img src='logo.png' style={{height: '15vh'}}/>
              <Link to='/' className='link'>Home</Link>
              <Link to='/users' className='link'>User Login</Link>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
          Garfield Park Bank & Trust, established 2017
        </footer>
      </div>
    );
  }

}
