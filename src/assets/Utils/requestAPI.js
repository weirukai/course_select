import {post, UserNotFound, UserPasswordError} from './request';
import {messages} from "./Notice"


export const  login= (that,login)=>
{
    return new Promise((resolve,reject)=>{
        that.$store.commit('SaveToken', '')
        post('/user/login',login)
            .then(
                //成功回调
                (res)=>
                {
                    if (res.status===200&&res.data.code===0)
                    {
                        that.$store.commit("SaveToken",res.data.data.token)
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
       courseData={
           location:["东九","西十二"],
           courseDay:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           type:['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '文学与艺术']
       }
       let stringTemp=''
       for (let i=0;i<courseData.location.length;i++)
    {
        stringTemp=stringTemp+'/'+courseData.location[i];
    }
       courseData.location=stringTemp
       stringTemp=''
    for (let i=0;i<courseData.courseDay.length;i++)
    {
        stringTemp=stringTemp+'/'+courseData.courseDay[i]
    }
    courseData.courseDay=stringTemp
    stringTemp=''
    for (let i=0;i<courseData.type.length;i++)
    {
        stringTemp=stringTemp+'/'+courseData.type[i]
    }
    courseData.type=stringTemp
        post(url,courseData).then(
            (res)=>{
                return res
            },
            (rej)=>{
                return rej
            }
        )
}

export const chooseCourse=()=>
{

}









