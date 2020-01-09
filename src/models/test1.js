
import {query} from "../services/example";

export default {

  namespace: 'test1',

  state: {
    messageList: []
  },



  subscriptions: {

  },

  effects: {
    *getList ({ payload}, {call, put}) {
      console.log('测试有被调用')
      const list = yield call(query, payload)
      console.log(list, 'list')
        if (list) {
          yield put({
            type: 'updateState',
            payload: {
              messageList: list.data.result
            }
          })
        }
    }
  },

  reducers: {
    updateState (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  },

};
