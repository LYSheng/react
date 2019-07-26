import React from 'react';
import './index.css';



class Details extends React.Component {
    state={
        uasrName:'',
        password:''
    };
    render() {
      return (
          <h1 className='detail-box'>详情</h1>
      )
    }
  }
  
  export default Details;