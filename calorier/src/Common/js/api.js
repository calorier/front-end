import fetch from './httpConfig'
export function loginController(data){
  console.log('begin loginController')
  return fetch.post('/login',data)
}
export function registerController(data){
  return fetch.post('/users',data)
}