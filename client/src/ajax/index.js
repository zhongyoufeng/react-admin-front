import axios from "axios";
import { message } from "antd";
axios.defaults.timeout = 10000;
let baseURL = "http://139.199.5.204:18080/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,data={}) {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL+url, {
        params: data
      })
      .then(response => {
          if(url=="code"){
            let blob = new Blob([response.data]);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(e) {
               console.log(e)
              };
          }
        resolve(response.data);
      })
      .catch(err => {
        message.error("请求失败请重试！");
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + url, data).then(
      response => {
        if (response.data.code != 0) {
          message.error(response.data.msg);
          return;
        }
        console.log("成功返回值：", response);
        resolve(response.data);
      },
      err => {
        message.error("请求失败请重试！");
        reject(err);
      }
    );
  });
}
