import React, { Component } from 'react';
import { Layout, Menu, Icon,Breadcrumb } from 'antd';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import RouterIndex from './router/index'
import Headers from './components/header/header'
import './App.css';
import 'antd/dist/antd.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class App extends Component {
  state = {
    collapsed: false,
    userData:{
      name:'布鲁氏',
      id:1
    }
  };
  componentDidMount() {
   
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" >
            <img  src="http://www.jq22.com/demo/educationadmintemplate201958/img/logo/logo.png" alt=""/>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item  key="1">
              <Link to='/home' className='info-data-link'>
                <Icon type="pie-chart" /> 
                <span>
                后台数据
                </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>
                <Link to='/detail' className='info-data-link'>
                渠道数据
                </Link>
                </span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>投放管理</span>
                  </span>
                }
              >
                <Menu.Item key="3">
                <span>
                <Link to='/login' className='info-data-link'>
                创建投放
                </Link>
                </span>
                </Menu.Item>
                <Menu.Item key="4">投放列表</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>标签库</span>
                  </span>
                }
              >
                <Menu.Item key="6">
                {/* <Route path='/login' component={Login}>标签</Route> */}
                </Menu.Item>
                <Menu.Item key="8">标签列表</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>反馈</span>
              </Menu.Item>
            </Menu> 
          </Sider>
          <Layout>
            <Headers datas={this.state.userData} flag="Sara" style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
              <RouterIndex />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

// export default withRouter(App);
export default App;

