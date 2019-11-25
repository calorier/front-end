/**
 * @description 用于创建fetch实例
 * @author GHL
 * @version 1.0
 * @exports function http
 */

//TODO 添加从strage获取token
import fetch from '@system.fetch'
import storage from '@system.storage'
//import router from '@system.router'

const http = {}
const baseUrl = 'http://192.168.43.28:8080/calorier/apis/v1'
//TODO对token进行赋值
var token = '12345'
var headers = {
    // 'contend-type':'multipart/form-data',
    'accept': 'application/json',
    'Authorication': token
}

//GET 方法
http.get = (url) => {
    url = baseUrl + url
    return new Promise((resolve, reject) => {
        fetch.fetch({
            url: url,
            cache: 'no-cache',
            headers: headers,
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer'
        }).then(response => {
            if (response.status === 200 || response.status === 304) {
                if (response.code == 1) {
                    resolve(response.data)
                } else {
                    reject(response.message)
                }
            } else {
                reject(response.code)
            }
        })
    })
}

//POST 方法
http.post = (url, data) => {
    console.log(`begin post`)
    url = baseUrl + url
    console.log(`url is ${url}`)
    return new Promise((resolve, reject) => {
        fetch.fetch({
            url: url,
            body: data,
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: headers,
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        }
        ).then(
            response => {
                if (response.status === 200) {
                    if (response.code === 1) {
                        resolve(response.data)
                    } else {
                        reject(response.message)
                    }
                } else {
                    reject(response.status)
                }
            }
        ).catch(err => {
            console.log(err)
        })
    })
}

export default http
