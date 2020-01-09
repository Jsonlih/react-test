import React, { Component } from 'react'
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import { Link, Route } from 'dva/router'
import menuSiderData from './menuSiderData'
import { getRoutes } from "./menuRouter"
import Test from '../test1/test1'
import Test2 from '../test2/test2.js'
import Test3 from '../test3/test3.js'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class MenuSider extends Component{
  state = {
    htmlTemp: ''
  }
  moveTo (url) {
    console.log('被调用')
    window.location.href = url
  }
  renderMenuItem (item) {
    return (
      <Menu.Item key={item.key}>
        <Link to={item.url}>
          { item.title }
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenu (item) {
    return (
      <SubMenu
        key={item.key}
        title={
          <span>
            { item.title }
          </span>
        }>
        {
          item.children && item.children.map(val => {
            if (val.children && val.children.length) {
              return this.renderSubMenu(val)
            } else {
              return this.renderMenuItem(val)
            }
          })
        }
      </SubMenu>
    )
  }
  renderMenu (menuArr) {
    return (
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1-1']}
          defaultOpenKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            menuArr.map(val => {
              if (val.children && val.children.length) {
                return this.renderSubMenu(val)
              } else {
                return this.renderMenuItem(val)
              }
            })
          }
        </Menu>
      </div>
    )
  }
  render () {
    let routes = getRoutes(window._dvaapp)
    console.log('routes', routes)
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          {
            this.renderMenu(menuSiderData.menuData)
          }
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/*<Route path="/test2" component={Test2}></Route>*/}
            {/*<Route path="/test1" component={Test}></Route>*/}
            {/*<Route path="/test3" component={Test3}></Route>*/}
            {
              routes.map(val => {
                return (
                  <Route path={val.path} component={val.component} key={val.path}></Route>
                )
              })
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}
