import request from '../utils/request';

export function query(data) {
  return request('/api/send/getmessage', {method: 'post', body: JSON.stringify(data)});
}


export function addCity(data) {
  return request('/api/city/addCity', {method: 'post', body: JSON.stringify(data)});
}


export function queryCity(data) {
  return request('/api/city/queryCity', {method: 'post', body: JSON.stringify(data)});
}


export function deleteCity(data) {
  return request('/api/city/deleteCity', {method: 'post', body: JSON.stringify(data)});
}

export function editCity (data) {
  return request('/api/city/editCity', {method: 'post', body: JSON.stringify(data)});
}
