import React from 'react'
import { Form } from 'antd' 


function a (paramsa) {
    console.log('paramsa', paramsa)
    let first = {a: 1}
    return () => {
        console.log(1111)
    }
}


function b (paramsb) {
    console.log('paramsb', paramsb)
    let second = {a: 1}
    return () => {
        console.log(2222)
    }
}

@a('haha')
@b('hi')
@Form.create()
export default class TEST3 extends React.Component {
    render () {
        const {getFieldValue} = this.props.form
        console.log('getFieldValue', getFieldValue)
        return (
            <div>
                42342w
            </div>
        )
    }
}