
import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import  { query } from '../../services/example'
import  MenuSider from './menuSider'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class Main extends Component{
    componentDidMount() {

    }
    render () {
      return (
        <Layout style={{ height: '100%'}}>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1-1']}
              style={{ lineHeight: '64px' }}
            >
            </Menu>
          </Header>
          <MenuSider>
          </MenuSider>
        </Layout>
      )
    }
}
