import React, {Component} from 'react'
import { connect } from 'dva'



@connect((state, b) => {
  console.log(b)
  return {
    messageListApi: state.test1.messageList
  }
})
export default class MyTest extends Component {

  constructor (props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch} = this.props
    dispatch({
      type: 'test1/getList'

    }).then(res => {
      console.log('res', res)
      const { messageListApi } = this.props
      console.log('msg1', messageListApi)
    })

  }

  render () {
    const {  messageListApi } = this.props
    console.log('msg2', messageListApi)
    return (
      <div>
        <ul>
          {
            messageListApi.map(val => {
              return <li> {val.messagetext}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
