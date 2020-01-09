import {addCity, queryCity, deleteCity, editCity} from "../services/example";


export default {
  namespace: 'test2',
  state: {
    initCityTableList: []
  },
  effects: {
    *addCity({payload}, {call, put}) {
      let result = yield call(addCity, payload)
      if (result) {
        yield put({
          type: 'updateState'
        })
      }
    },
    *queryCity ({payload}, {call, put}) {
      let result = yield call(queryCity, payload)
      console.log('查询的result为', result)
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            initCityTableList: result.data.result
          }
        })
      }
    },
    *deleteCity ({payload}, {call}) {
      let res = yield call(deleteCity, payload)
      return res
    },
    *editCity ({payload}, {call}) {
      let res = yield call(editCity, payload)
      return res
    }
  },
  reducers: {
    updateState (state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
