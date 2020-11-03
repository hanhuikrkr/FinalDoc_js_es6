import { toJS } from 'mobx'
import request   from './request'
import { param } from './params'
import { Component } from 'react'

export default class BaseActions extends Component {
  

  get = async (api = '', params = {}) => {
    let url
    if (api.indexOf('?') === -1) {
      url = api + `?${param(params)}`
    } else {
      url = api + `&${param(params)}`
    }
    let data = await request(url, {})
    return toJS(data)
  }

  post = async (api = '', params = {}) => {
    return await request(
      api,
      {
        method: 'POST',
        params
      },

    )
  }

}