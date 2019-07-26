import React from 'react';
import './index.css';



class Login extends React.Component {
    state={
        uasrName:'',
        password:''
    };
    render() {
      return (
          <h1 className='detail-box'>登录</h1>
      )
    }
  }
  
  export default Login;