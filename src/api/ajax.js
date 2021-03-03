import axios from 'axios';
import qs from 'qs'
// axios.defaults.baseURL = 'https://jzt.daojia.com';
export default function Ajax(url, data = {}, type) {
  return new Promise((resolve, rejet) => {
    let Promise;
    if (type === 'GET') {
      Promise = axios.get(url, {
        params: data
      })
    } else {
      Promise = axios.post(url, qs.stringify(data))
    }
    Promise.then((response) => {
      resolve(response);
    }).catch((error) => {
      console.error("数据请求异常！", error)
      rejet(error)
    })
  })

}