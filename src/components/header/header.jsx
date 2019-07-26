import React from 'react'
import './index.css';
import 'antd/dist/antd.css';
export default class Header extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
         datas:{},
         flag:'',
        }
      } 
    //   当组件输出到 DOM 后会执行 componentDidMount() 钩子
    componentDidMount() {

    }
  
    componentWillUnmount() {
  
    }
    render() {
        return (
          <div className="header-box flex f14 justify-content_space-between">
              <div className="header-left">
                  <div className="name">
                      商户名称：
                      <span>{this.props.datas.name}</span>
                  </div>
              </div>
              
              <div className="header-right">
                  <div className="name">
                      登录状态：
                      <span>{this.props.flag}</span>
                  </div>

              </div>
          </div>
        )
    }
}