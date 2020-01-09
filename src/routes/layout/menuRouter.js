import { createElement } from 'react'
import dynamic from 'dva/dynamic'
const modelNotExisted = (app, model) => {

}

export const dynamicWapper = (app, component) => {
  return dynamic({
    app,
    // models: () => {
    //   models.length && models.map(v => import(`../../models/${v}.js`))
    // },
    component: () => {
      return component().then(raw => {
        const Component = raw.default || raw
        return props =>
          createElement(Component, {
            ...props
          })
      })
    }
  })
}

export const getRoutes = app => {
  return [
    {
      path: '/test1',
      component: dynamicWapper(app, () => import('../test1/test1'))
    },
    {
      path: '/test2',
      component: dynamicWapper(app, () => import('../test2/test2'))
    },
    {
      path: '/test3',
      component: dynamicWapper(app, () => import('../test3/test3'))
    }
  ]
}


