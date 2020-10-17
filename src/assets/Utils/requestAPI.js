import {post, UserNotFound, UserPasswordError} from './request';
import {messages} from "./Notice"

export const  login= (that,login)=>
{
    return new Promise((resolve,reject)=>{
        post('/user/login',login)
            .then(
                //成功回调
                (res)=>
                {
                    if (res.status===200&&res.data.code===0)
                    {
                        that.$store.commit("SaveToken",res.data.token)
                        that.$router.push("/mainPage")
                        resolve(res.data.code)

                    }
                    else if (res.status===200&&res.data.code===UserPasswordError||res.data.code===UserNotFound) {
                        /**用户密码存在错误*/
                        messages("error","账户或者密码错误")
                    }
                },
                //失败回调
                (res)=>{
                    // //登录失败，提示登录失败原因
                    reject(res.status)
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




