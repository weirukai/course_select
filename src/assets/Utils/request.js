import axios from "axios";
import router from "@/router/router";
import {
    Loading
} from "element-ui";
import {messages} from './Notice'
import store from "@/store/index.js";

export const UserNotFound=110;
export const UserPasswordError=120;
export const UserTokenInvalid=130;
export const intUserTokenExpire=140;
export const successCode=0;
axios.defaults.timeout = 50000;
axios.defaults.baseURL = "http://10.10.245.92:8090/";
axios.defaults.headers["Content-Type"] =
    "applicaion/json";
let loading = null;

/*
 *请求前拦截
 *用于处理需要请求前的操作
 */

axios.interceptors.request.use(
    config => {
        loading = Loading.service({
            text: "正在加载中......",
            fullscreen: true
        });
        if (store.state.token) {
            config.headers["Authorization"] = store.state.token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
axios.interceptors.response.use(
    response => {
        return new Promise((resolve, reject) => {
            //请求成功后关闭加载框
            console.log(response.status)
            if (loading) {
                loading.close();
            }
            const res = response;
            if (res.status===200) {
                resolve(res)
                /*do nothing else   next response will solve these all**/


            }else if(res.status===403)
            {
                //说明验证信息有问题
                store.commit("SaveToken",'')
                router.push("/login")


            }

            else {
                reject(res)
            }
        })
    },
    error => {
        console.log(error)
        //请求成功后关闭加载框
        if (loading) {
            loading.close();
        }
        //断网处理或者请求超时
        if (!error.response) {
            //请求超时
            if (error.message.includes("timeout")) {
                console.log("超时了");
                messages("error", "请求超时，请检查互联网连接");
            } else {
                //断网，可以展示断网组件
                console.log("断网了");
                messages("error", "请检查网络是否已连接");
            }
            return;
        }
        const status = error.response.status;
        switch (status) {
            case 500:
                messages("error", "服务器内部错误");
                break;
            case 404:
                messages(
                    "error",
                    "未找到远程服务器"
                );
                break;
            case 403:
                messages("warning", "用户登陆过期，请重新登陆");
                store.commit('COMMIT_TOKEN', '')
                setTimeout(() => {
                    router.replace({
                        path: "/login",
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000);
                break;
            case 400:
                messages("error", "数据异常");
                break;
            default:
                messages("error", error.response.data.message);
        }
        return Promise.reject(error);
    }
);

/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios
//             .get(url, {
//                 params
//             })
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// }

/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
    // return new Promise((resolve, reject) => {
     return    axios
            .post(url, params);
            // .then(res => {
            //         // resolve(res)
            //         try {
            //             if (res.status === 200 && res.data.code === 0) {
            //                 //请求成功
            //                 resolve(res)
            //             } else {
            //                 reject(res)
            //             }
            //         } catch (error) {
            //             reject(res)
            //         }
            //     }, (rej) => {
            //
            //         console.log(rej)
            //
            //
            //     }
            // )
            // .catch(err => {
            //     reject(err);
            // });
    // });
}

export function get(url, params) {
    // return new Promise((resolve, reject) => {
    return    axios
        .get(url, params);
    // .then(res => {
    //         // resolve(res)

}