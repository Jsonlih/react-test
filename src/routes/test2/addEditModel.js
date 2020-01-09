import React, {Component} from 'react'
import {Modal, Button, Form, Input} from 'antd'



class AddModel extends Component{
  constructor (props) {
    super(props)
  }
  handleOk () {
    let {handleOk, editObject} = this.props
    let { getFieldsValue } = this.props.form
    let formValue = getFieldsValue()
    handleOk(formValue, editObject)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('propform', this.props.form)
    // console.log('prevProps', prevProps)
    // console.log('prevState', prevState)
    // const { editObject, addEditFlag } = this.props
    // if (addEditFlag) {
    //   const { setFieldsValue } = this.props.form
    //   setFieldsValue({
    //     cityName: editObject.cityName
    //   })
    // }
  }

  render() {
    const { addEditFlag, visible, handleCancel, editObject } = this.props
    console.log('renderprop', addEditFlag)
    if (!visible) {
      return null
    }
    const { getFieldDecorator } = this.props.form
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
    return (
      <div>
        <Modal
          title={addEditFlag ? '编辑' : '新增'}
          visible={visible}
          onOk={this.handleOk.bind(this)}
          onCancel={handleCancel}
        >
          <Form { ...formItemLayout} layout="inline">
            <Form.Item label="城市名称：">
              {getFieldDecorator('cityName', {
                initialValue: editObject && editObject.cityName
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

const Model = Form.create({})(AddModel)
export default Model
