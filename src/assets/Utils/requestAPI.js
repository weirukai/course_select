import {post} from './request';
import {messages} from "./Notice"
export const  login= (that,login)=>
{
    return new Promise((resolve,reject)=>{
        post('/user/login',login)
            .then(
                //成功回调
                (res)=>
                {
                    that.$store.commit("SaveToken",res.data.token)
                    that.$router.push("/mainPage")
                    resolve(res.data.code)
                },
                //失败回调
                (res)=>{
                    //登录失败，提示登录失败原因
                    messages("error","账户或者密码错误")
                    reject(res.data.code)
                }
            )
    });
}


export const requestForCourse=(url,courseData)=>
{
        post(url,courseData).then(
            (res)=>{
                return res
            },
            (rej)=>{
                return rej
            }

        )
}




