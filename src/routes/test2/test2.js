
import React, { Component } from 'react'
import {connect} from 'dva'
import { Form, DatePicker, TimePicker, Button, Input } from 'antd'
import { Table, Divider, Tag } from 'antd'
import { Bind } from 'lodash-decorators'
import './test2.less'
import AddEditModel from './addEditModel'


@connect(({test2}) => test2)
class AddCity extends Component{

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      current: 1,
      pageSize: 10,
      addEditFlag: false,
      editObject: null
    }
  }

  @Bind
  handleOk (value, editObject) {
    this.setState((state, props) => {
      console.log('state', state);
      console.log('props', props);
    })
    let { dispatch } = this.props
    let { addEditFlag } = this.state
    if (!addEditFlag) {
      dispatch({
        type: 'test2/addCity',
        payload: {
          cityName: value.cityName
        }
      }).then(() => {
        this.queryCity()
        this.setState({
          visible: false
        })
      })
    } else {
      dispatch({
        type: 'test2/editCity',
        payload: {
          id: editObject.id,
          cityName: value.cityName
        }
      }).then(() => {
        this.queryCity()
        this.setState({
          visible: false
        })
      })
    }

  }


  @Bind
  handleCancel () {
    this.setState({
      visible: false
    })
  }
  componentDidMount() {
    this.queryCity()
  }

  handleSubmit  (e) {
    e.preventDefault()
    const { getFieldsValue } = this.props.form
    let a = getFieldsValue()
    console.log('a', a)
  }
  addCity () {
    console.log('addcity')
    this.setState({
      visible: true,
      addEditFlag: false
    })
  }

  @Bind
  deleteItem (id, event) {
    let { dispatch } = this.props
    console.log('patch')
    dispatch({
      type: 'test2/deleteCity',
      payload: {
        id: id
      }
    }).then(() => {
      this.queryCity()
    })
  }
  @Bind
  editCity (editObject) {
    this.setState({
      visible: true,
      addEditFlag: true,
      editObject: editObject
    })
  }

  queryCity () {
    let { dispatch } = this.props
    let { current, pageSize } = this.state
    dispatch({
      type: 'test2/queryCity',
      payload: {
        current,
        pageSize
      }
    }).then(() => {

    })
  }
  render() {
    console.log('props', this.props)
    const { getFieldDecorator } = this.props.form
    const { initCityTableList = []}  = this.props
    console.log('initCityTableList', initCityTableList)
    const columns = [
      {
        title: '城市名称',
        dataIndex: 'cityName',
        key: 'cityName',
        render: text => <a>{text}</a>,
      },
      {
        title: '操作',
        dataIndex: '',
        render: text => {
          console.log('text', text)
          return (
            <div>
              <Button type="link" onClick={(e) => this.editCity(text, e)}>编辑</Button>
              <Button type="link" onClick={(e) => this.deleteItem(text.id, e)}>删除</Button>
            </div>
          )
        },
      }
    ]
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      }
    }
    const modelProps = {
      handleOk: this.handleOk,
      handleCancel: this.handleCancel,
      visible: this.state.visible,
      addEditFlag: this.state.addEditFlag,
      editObject: this.state.editObject
    }
    return (
      <div>
        <div className="mytest">
          <Form { ...formItemLayout} layout="inline">
            <Form.Item label="城市名称：" style={{width: '40%'}}>
              {getFieldDecorator('cityName', {

              })(<Input />)}
            </Form.Item>
            <Button type="primary">查询</Button>
            <Button type="primary" className="add" onClick={this.addCity.bind(this)}>新增</Button>
          </Form>
        </div>
        <div>
          <Table columns={columns} dataSource={initCityTableList} />
        </div>

        <AddEditModel { ...modelProps }></AddEditModel>
      </div>
    )
  }
}

const AddComponent = Form.create({})(AddCity)
export default AddComponent
